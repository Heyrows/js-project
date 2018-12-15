# JS-Project

This project's purpose is to make and assemble multiple microservices.

## Getting Started

Follow the instructions below to start using the project.

### Prerequisites

To run the project you need the install these first:

- Git : https://git-scm.com/downloads
- Docker : https://www.docker.com/get-started
- Docker-Compose : https://docs.docker.com/compose/install/#install-compose

### Installing

Use the following instructions to download and run the project

```
git clone https://github.com/Heyrows/js-project.git 
cd js-project.git
docker-compose up --build
```

Once every services is running, go on 
`
http://192.168.99.100:4200/
`

### Possible Errors

* If you get an error while the services were building, you may need to restart your computer.

* If the database goes down due to too much connections, run the following instruction : 
```
docker-compose down
docker volume prune
```
Then run :
``
docker-compose up --build
``

## Authors

* **CAHUET Amaury** (https://github.com/Heyrows)
* **BRAVO Julien** (https://github.com/JuleMunchkin)
