from django.contrib import admin
from .models import Book

admin.site.site_title = 'BOOK FINDER'
admin.site.site_header = 'BOOK FINDER'
admin.site.admin_name = 'BOOK FINDER'
# admin.site.site_url = '/'
admin.site.index_title = 'Admin'


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'language', 'download_url')
    list_filter = ('language',)
    search_fields = ('title',)
