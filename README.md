# django-sales-reports-app

This web app allows the user (whether from an admin or salesperson) to upload sales documents for loading into a central database.
The user can also view sale details in a chart or graph format (bar, pie or line chart) for a specified time period.

## Setup with Virtualenv

You can run the django-sales-reports-app locally without setting up Vagrant or Docker and simply use Virtualenv, which is the [recommended installation approach](https://docs.djangoproject.com/en/3.2/topics/install/#install-the-django-code) for Django itself.

#### Dependencies

- Python 3.6, 3.7, 3.8 or 3.9
- [Virtualenv](https://virtualenv.pypa.io/en/stable/installation/)
- [VirtualenvWrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) (optional)

### Installation

With [PIP](https://github.com/pypa/pip) and [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/)
installed, run:

    virtualenv django-data-reports-app
    cd django-data-reports-app
    source bin/activate
    python --version

Confirm that this is showing a compatible version of Python 3.x. If not, and you have multiple versions of Python installed on your system, you may need to specify the appropriate version when creating the virtualenv:

    deactivate
    cd ..
    rm -rf django-data-reports-app
    virtualenv django-data-reports-app --python=python3.9
    cd django-data-reports-app
    source bin/activate
    python --version

Now we're ready to set up the django-data-reports project itself:

    cd ~/dev [or your preferred dev directory]
    git clone git@github.com:siralbert/django-data-reports-app.git
    cd django-data-reports-app
    pip install -r requirements.txt

To run the django-data-reports project, run the following command after all the dependencies are installed:

    ./manage.py runserver

The server will run at http://127.0.0.1:8000/
Log into the site as admin with the credentials `admin / changeme123`.
