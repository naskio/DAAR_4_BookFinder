from rest_framework import serializers
from .models import Book, Keyword, Author, BookShelve


class BookSerializer(serializers.ModelSerializer):
    authors = serializers.ListField(read_only=True)
    bookshelves = serializers.ListField(read_only=True)

    class Meta:
        model = Book
        exclude = ('jaccard_calculated', '_id', 'keywords')


# class BookSerializer(serializers.Serializer):
#     gutenberg_id = serializers.IntegerField(read_only=True)
#     title = serializers.CharField(read_only=True)
#     language = serializers.CharField(read_only=True)
#     cover_url = serializers.URLField(read_only=True)
#     small_cover_url = serializers.URLField(read_only=True)
#     download_url = serializers.URLField(read_only=True)
#     authors = serializers.ListField(read_only=True)
#     bookshelves = serializers.ListField(read_only=True)


class SearchQuerySerializer(serializers.Serializer):
    keyword = serializers.CharField(required=False, allow_null=True, allow_blank=True, default="")
    advanced = serializers.BooleanField(required=False, allow_null=True, default=False)


class AutoCompleteSerializer(serializers.Serializer):
    q = serializers.CharField(required=False, allow_null=True, allow_blank=True, default="")
