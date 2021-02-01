# Generated by Django 3.0.5 on 2021-02-01 05:40

import apps.books.models
from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('gutenberg_id', models.IntegerField()),
                ('title', models.CharField(max_length=255)),
                ('language', models.CharField(max_length=50)),
                ('cover_url', models.URLField()),
                ('small_cover_url', models.URLField()),
                ('download_url', models.URLField()),
                ('centrality_rank', models.IntegerField(default=-1)),
                ('jaccard_calculated', models.BooleanField(default=False)),
                ('authors', djongo.models.fields.ArrayField(model_container=apps.books.models.Author)),
                ('bookshelves', djongo.models.fields.ArrayField(model_container=apps.books.models.BookShelve)),
                ('keywords', djongo.models.fields.ArrayField(model_container=apps.books.models.KeywordOccurrence)),
            ],
        ),
        migrations.CreateModel(
            name='Keyword',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('keyword', models.CharField(max_length=255)),
                ('books', djongo.models.fields.ArrayField(model_container=apps.books.models.BookOccurrence)),
            ],
        ),
    ]
