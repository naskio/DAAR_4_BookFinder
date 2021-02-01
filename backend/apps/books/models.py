# from django.db import models
from djongo import models


class Author(models.Model):
    full_name = models.CharField(max_length=255)

    class Meta:
        abstract = True


class BookShelve(models.Model):
    label = models.CharField(max_length=255)

    class Meta:
        abstract = True


class KeywordOccurrence(models.Model):
    keyword = models.CharField(max_length=255)
    occurrence_number = models.IntegerField(default=0)

    class Meta:
        abstract = True


class Book(models.Model):
    _id = models.ObjectIdField()
    gutenberg_id = models.IntegerField()
    title = models.CharField(max_length=255)
    language = models.CharField(max_length=50)
    cover_url = models.URLField()
    small_cover_url = models.URLField()
    download_url = models.URLField()
    centrality_rank = models.IntegerField(default=-1)
    jaccard_calculated = models.BooleanField(default=False)
    authors = models.ArrayField(model_container=Author)
    bookshelves = models.ArrayField(model_container=BookShelve)
    keywords = models.ArrayField(model_container=KeywordOccurrence)
    # Manager
    objects = models.DjongoManager()

    def __str__(self):
        return self.title or f"{self.id}"


class BookOccurrence(models.Model):
    book_gutenberg_id = models.IntegerField()
    occurrence_number = models.IntegerField(default=0)

    class Meta:
        abstract = True


class Keyword(models.Model):
    _id = models.ObjectIdField()
    keyword = models.CharField(max_length=255)
    books = models.ArrayField(model_container=BookOccurrence)
    # Manager
    objects = models.DjongoManager()

    def __str__(self):
        return self.keyword
