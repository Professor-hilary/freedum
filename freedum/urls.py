from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import handler400, handler403, handler404, handler500
from django.shortcuts import render

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls')),
    path('api/', include('base.api.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

def custom_400_error(request, exception):
    return render(request, '400.html', status=400)

def custom_403_error(request, exception):
    return render(request, '403.html', status=403)

def custom_404_error(request, exception):
    return render(request, '404.html', status=404)

def custom_500_error(request):
    return render(request, '500.html', status=500)

handler400 = custom_400_error
handler403 = custom_403_error
handler404 = custom_404_error
handler500 = custom_500_error