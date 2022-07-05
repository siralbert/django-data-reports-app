from django.urls import path

# List of views from views.py file
from .views import (
    home_view,
    SaleListView,
    SaleDetailView,
#    sale_detail_view,
#    sale_list_view
)

app_name = 'sales'

urlpatterns = [
    path('', home_view, name='home'),
#    path('sales/', sale_list_view, name='list'),
	path('sales/', SaleListView.as_view(), name='list'),
#    path('sales/<pk>/', sale_detail_view, name='detail'),
	path('sales/<pk>/', SaleDetailView.as_view(), name='detail')

]
