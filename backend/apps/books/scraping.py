import requests
from typing import Dict
from apps.books.nlp import extract_keywords_with_occurrences
from apps.books.utils import get_clean_text_from_url

GUTENDEX_API = "https://gutendex.com/books/"


def get_books():
    has_next = True
    page = 1
    while has_next:
        res = requests.get(GUTENDEX_API, params={
            "page": page,
        })
        if res:
            res = res.json()
            if res.get('next'):
                page += 1
            else:
                has_next = False
            results = res.get('results')
            if results:
                for book in results:
                    download_link = book.get('formats', {}).get('text/plain; charset=utf-8')
                    if download_link and download_link.endswith('.txt'):
                        ll = book.get('languages')
                        if ll and ll[0] == 'en':
                            yield book
            else:
                yield None
        else:
            yield None


def gutenberg_to_dict(g_book: Dict) -> Dict:
    book = {
        # "_id": None,
        "gutenberg_id": g_book.get('id'),
        "title": g_book.get('title'),
        "language": g_book.get('languages', ['en'])[0],
        "cover_url": g_book.get('formats', {}).get('image/jpeg').replace('small', 'medium'),
        "small_cover_url": g_book.get('formats', {}).get('image/jpeg'),
        "download_url": g_book.get('formats', {}).get('text/plain; charset=utf-8'),
        "centrality_rank": None,
        "authors": list(map(lambda x: {'full_name': x.get('name')}, g_book.get('authors', []))),
        "bookshelves": list(map(lambda x: {'label': x}, g_book.get('bookshelves', []))),
        # "keywords": [{"keyword":,"occurrence_number":,}],
        "keywords": extract_keywords_with_occurrences(
            get_clean_text_from_url(g_book.get('formats', {}).get('text/plain; charset=utf-8'))),
    }
    return book
