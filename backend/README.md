# Backend

Contains the code of the backend (Using Django)

## Collect Data

1. Run Django migrations
    ```shell
    ./manage.py migrate   
    ```

1. Collect books from gutenberg.org
    ```shell
    ./manage.py collect_data --n 20   
    ```

1. Calculate Jaccard's Graph
    ```shell
    ./manage.py calculate_graph
    ```

1. Calculate Centrality Ranking (Betweenness)
    ```shell
    ./manage.py calculate_centrality
    ```

## MongoDB commands (standalone)

```shell
brew services start mongodb-community
brew services stop mongodb-community
```