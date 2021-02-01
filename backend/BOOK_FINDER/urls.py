"""BOOK_FINDER URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from .settings import DEBUG, MEDIA_ROOT, STATIC_ROOT, STATIC_URL, MEDIA_URL
# from apps.books import views
from django.views.generic.base import TemplateView
import debug_toolbar

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),  # adding Login/Logout to the browsable API.
    # Admin
    path('admin/', admin.site.urls),
    # API
    path('api/', include('apps.books.urls')),
    # index
    path('', TemplateView.as_view(template_name='index.html')),
    # path('', views.resume_view, name='home-page'),
]

# Static & Media
urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
urlpatterns += static(STATIC_URL, document_root=STATIC_ROOT)

# Debug Toolbar
if DEBUG:
    urlpatterns += [
        path('__debug__/', include(debug_toolbar.urls)),
    ]
