# DAAR Project A: Book Finder

![Alt text](frontend/src/assets/images/logo_text.png?raw=true "Book Finder")

![Alt text](UIs/web/1.png?raw=true "Home")
![Alt text](UIs/mobile/4.jpeg?raw=true "Mobile App")

Search Engine for free books (gutenberg.org).

* [Introduction](#Introduction)

    * [Features](#Features)
    * [Quick Links](#Quick-Links)
    * [DataSet](#dataset)

* [Getting started](#getting-started) (Instructions to build and run the project)
    * [Requirements](#requirements)
    * [Configure](#configure)
    * [build](#build)
    * [Run](#run)

* [Docker Architecture](#docker-architecture)
    * [MongoDB](#mongodb)
    * [Neo4j](#neo4j)
* [Code Structure](#code-structure)
* [User Interfaces](#user-interfaces)
* [About](#about)

## Introduction

Book Finder is a Search Engine that helps you find free books quickly and recommend you similar books.

### Features

- Indexing Books from online library (gutenberg.org or another source).
- Search a book by a keyword.
- Search a book by a regular expression.
- The search results are sorted by relevancy.
- Get recommendations (Similar books).
- Auto-correct: the system suggests automatically a keyword when you search for a keyword that doesn't match.
- REST APIs that can be used with other clients.

### Quick Links

These are a shortcuts to help you access the Application quickly.

- [Book Finder](http://localhost:3000/)
- [REST APIs (Swagger Docs)](http://localhost:8000/api/swagger/)
- [REST APIs](http://localhost:8000/api/)

### DataSet

The system supports indexing books from ```gutenber.org``` (it can be expanded easily to cover more libraries).

## Getting started

These instructions will get you a copy of the project up and running on your local machine or in a production server.
(Start by )

### Requirements

To make the system independent of the environment and make it easier for you to run it, we are using Docker.

1. [Docker or Docker Desktop](https://www.docker.com) (Docker engine 19+ with Docker compose).

### Configure

After cloning the repository, we start by configuring the environment:

1. Rename ```.env_example``` to ```.env``` or create an ```.env``` file in the root folder (same folder
   as ```docker-compose.yaml``` file) and copy the content of ```.env_example``` to ```.env``` file.
1. Optionally Customize the variables according to your preferences.

### Build

1. We start by building the images using the command
    ```shell script
    docker-compose build
    ```
1. Run the project
    ```shell script
    docker-compose up
    ```
1. Open a new tab in the terminal and run the migrations using the command
    ```shell script
    docker-compose run web python manage.py migrate
    ```
1. then index some books from gutenberg.org (change the parameter n to change the number of books)
    ```shell script
    docker-compose run web python manage.py collect_data --n 10
    ```
1. Calculate the Jaccard's Graph
    ```shell script
    docker-compose run web python manage.py calculate_graph 
    ```
1. Calculate the Centrality Ranks (Betweenness Centrality)
    ```shell script
    docker-compose run web python manage.py calculate_centrality
    ```

### Run

- To run the system
    ```shell script
    docker-compose up
    ```
- To shut down the system (from another tab)
    ```shell script
    docker-compose down
    ```

## Docker Architecture

The application consists of 4 containers:

1. *mongodb* where the MongoDB instance is running.
1. *neo4j* where the neo4j instance is running.
1. *web* where the backend server is running.
1. *frontend* server to serve the React App.

> MongoDB will persist data on ```./mongodb_data/``` folder (mounted-host volume).

> Neo4j will persist data on ```./neo4j_data/``` folder (mounted-host volume).

### MongoDB

We use MongoDB to store the books meta-data and the index table (keywords -> books).

### Neo4j

We use neo4j to store the Jaccard's Graph.

## Code Structure

- frontend: contains the code of the Web App (which is also available as PWA) using React and Redux.
- backend: contains the code of search engine, using Django and Django Rest Framework.

## User Interfaces

After indexing some books, we can test the Search Engine

1. Search by keyword
   ![Alt text](UIs/web/3.png?raw=true "Search By Keyword")

1. Search results
   ![Alt text](UIs/web/4.png?raw=true "Search results")

1. Search by regex
   ![Alt text](UIs/web/6.png?raw=true "Search by regex")

1. Auto-complete
   ![Alt text](UIs/web/2.png?raw=true "Auto-complete")

1. Auto-correct
   ![Alt text](UIs/web/11.png?raw=true "Auto-correct")

1. book
   ![Alt text](UIs/web/5.png?raw=true "Book details")

1. similar books
   ![Alt text](UIs/web/9.png?raw=true "Similar books")

1. Mobile App (PWA)

    1. Add to Home Screen

       ![Alt text](UIs/mobile/1.jpeg?raw=true "Add to Home Screen")

    1. Icon

       ![Alt text](UIs/mobile/2.jpeg?raw=true "Home Screen")

    1. PWA

       ![Alt text](UIs/mobile/3.jpeg?raw=true "Book Finder PWA")

## About

Team: Mehdi Nassim KHODJA, Qiwei XIAN, Adel EL AMRAOUI

Developed by students at Sorbonne University, just for learning purposes (part of DAAR lectures). Using Python with
Django, MongoDB, Neo4j, React, Redux and Docker.