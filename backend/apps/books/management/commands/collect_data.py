"""
Script for Executions
run:
./manage.py collect_data
./manage.py collect_data [--n int]
./manage.py collect_data --n 5
"""
from django.core.management import BaseCommand
from django.conf import settings
from apps.books.scraping import get_books, gutenberg_to_dict
from apps.books.models import Book, Keyword


class Command(BaseCommand):
    def __init__(self, *args, **kwargs):
        super(Command, self).__init__(*args, **kwargs)

    help = "Collect Books from gutenberg.org"

    def add_arguments(self, parser):
        parser.add_argument(
            '--n',
            type=int,
            default=10,
            help='Number of books to collect',
        )

    def handle(self, *args, **options):
        g_books = get_books()
        for x in range(0, min(settings.BOOKS_NUMBER, options['n'])):
            b_dict = next(g_books)
            if not Book.objects.filter(gutenberg_id=b_dict.get('id')).exists():
                b_dict = gutenberg_to_dict(b_dict)
                b = Book(**b_dict)
                b.save()
                for y in b_dict.get('keywords'):
                    if not Keyword.objects.filter(keyword=y['keyword']).exists():
                        kw = Keyword(keyword=y['keyword'],
                                     books=[{
                                         'book_gutenberg_id': b_dict['gutenberg_id'],
                                         'occurrence_number': y['occurrence_number'],
                                     }])
                        kw.save()
                    else:
                        kw = Keyword.objects.filter(keyword=y['keyword'])
                        for obj in kw[:1]:
                            obj.books.append({
                                'book_gutenberg_id': b_dict['gutenberg_id'],
                                'occurrence_number': y['occurrence_number'],
                            })
                            obj.save()
                print('saved', b.gutenberg_id, b.title)
            else:
                print(b_dict.get('id'), 'already exists')
