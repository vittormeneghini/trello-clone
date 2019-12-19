# TRELLO-CLONE

## Steps

1. Clone this project
1. RUN THIS TO LISTEN SERVERS `sudo cd trello-clone && cd trello-clone && rm -rf node_modules && rm package-lock.json && npm install && npm start && cd .. && cd trello-clone-api && rm -rf node_modules && package-lock.json && npm install && npm start`
1. Install image mongo in docker `docker pull tutum/mongodb`
1. Creating server without password `docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb`
1. Exec `docker ps -a` to list all containers and take a containerId
1. With containerId run `docker start containerId`
1. Create a database with name `trellodb`
