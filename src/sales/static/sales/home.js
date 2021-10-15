console.log("Hello home page");

const reportBtnEl = document.getElementById('report-btn');
const imgEl = document.getElementById('img')
const modelBodyEl = document.getElementById('modal-body')
// report form is the bootsrap modal after clicking on add rport btn
const reportForm = document.getElementById('report-form')
const alertBox = document.getElementById('alert-box')

const reportName = document.getElementById('id_name');
const reportRemarks = document.getElementById('id_remarks');
const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value

const handleAlerts = (type,msg) => {
    alertBox.innerHTML =`
        <div class="alert alert-${type}" role="alert">
            ${msg}
        </div>
    `
}

if (imgEl){
    reportBtnEl.classList.remove("not-visible")
}

reportBtnEl.addEventListener("click",() => {
    imgEl.setAttribute('class','w-100')
    modelBodyEl.prepend(imgEl)
    
    reportForm.addEventListener('submit',e=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('csrfmiddlewaretoken',csrf)
        formData.append('name',reportName.value)
        formData.append('remarks',reportRemarks.value)
        formData.append('image',imgEl.src)
        
        $.ajax({
            type:'POST',
            url: '/reports/save/',
            data:formData,
            success:function(response){
                console.log(response)
                handleAlerts('success','report created')
                reportForm.reset()
            },
            error:function(error){
                console.log(error)
                handleAlerts('danger','Oops... something went wrong')
            },
            processData: false,
            contentType:false,
        })
    })
})