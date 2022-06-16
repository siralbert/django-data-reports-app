from sales.models import Sale
from django.db.models.signals import m2m_changed
from django.dispatch import receiver


from customers.models import Customer
from products.models import Product

@receiver(m2m_changed, sender=Sale.positions.through)
def calculate_total_price(sender, instance, action, **kwargs):
    print(action)

    total_price = 0
    if action == 'post_add' or action == 'post_remove':
        for item in instance.get_positions():
            total_price += item.price

    instance.total_price = total_price
    instance.save()

def insert_record(rec, table):

    # Check if record exists in table
    try:
        rec = table.objects.get(name=rec)
    except table.DoesNotExist:
        rec = None

    # if record exists no action is necessary
    # if record does not exist insert new record
    return

    if rec == None:
        try:
            create_rec = table.objects.create(name=rec)
        except:
            print ("Error creating customer record")
    print ("Record created successfully")
    return

