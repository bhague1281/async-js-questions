# Async Questions

These are some questions that represent different problems when dealing with asynchronous programming in JavaScript.

## Getting Started

This project requires Node 6 or above.

### Running Natively

* Ensure Node 6 or greater is installed on your machine
* Install dependencies:

    ```bash
    npm install
    ```

* Run the questions:

    ```bash
    node question1.js
    node question2.js
    ```

### Running using Docker

* Ensure Docker is installed
    * [Mac](https://docs.docker.com/docker-for-mac/install/)
    * [Windows](https://docs.docker.com/docker-for-windows/) 
    * [Ubuntu/Other Linux Distros](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)
* If using Ubuntu/Linux, ensure [Docker Compose](https://docs.docker.com/compose/install/) is installed. These are already installed if using Docker for Mac, Docker for Windows, or Docker Toolbox.
* Install dependencies:

    ```bash
    docker-compose run install
    ```

* Run the questions:

    ```bash
    docker-compose run question1
    docker-compose run question2
    ```