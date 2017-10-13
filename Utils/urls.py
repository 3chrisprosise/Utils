"""Utils URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.conf.urls import include
from django.contrib import admin

from Utils.settings import MEDIA_ROOT
from django.views.static import serve
import ckeditor
from All_utile import views as All_views
from django.conf.urls.static import static
from Utils import settings
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^all/', include('All_utile.urls')),

    url(r'^media/(?P<path>.*)$',  serve, {"document_root": MEDIA_ROOT}),
    url(r'^editor$',All_views.Ckeditor),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
