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

    mkvirtualenv django-data-reports-app
    python --version

Confirm that this is showing a compatible version of Python 3.x. If not, and you have multiple versions of Python installed on your system, you may need to specify the appropriate version when creating the virtualenv:

    deactivate
    rmvirtualenv django-data-reports-app
    mkvirtualenv django-data-reports-app --python=python3.9
    python --version

Now we're ready to set up the django-data-reports project itself:

    cd ~/dev [or your preferred dev directory]
    git clone https://github.com/django-data-reports-app/django-data-reports-app.git
    cd django-data-reports-app
    pip install -r requirements/base.txt

To set up your database and load initial data, run the following commands:

    ./manage.py migrate
    ./manage.py load_initial_data
    ./manage.py runserver

Log into the admin with the credentials `admin / changeme123`.
