# DAAR_4_BookFinder

Search engine for free books

## Build

```shell
docker-compose build
docker-compose up
docker-compose down
```

```shell
docker-compose run web python manage.py collect_data --n 1665

docker-compose run web python manage.py migrate
docker-compose run web python manage.py collect_data --n 12
docker-compose run web python manage.py calculate_graph
docker-compose run web python manage.py calculate_centrality
```