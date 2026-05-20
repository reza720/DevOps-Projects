## About the API

This is a simple API developed with Express.js. It has two user roles: Admin and Customer. Both require authentication and authorization.

The API follows a layered architecture where requests move from routes to middleware. If a request passes through the middleware successfully, the controller triggers the services, the services interact with the models, and the models use the ORM (Sequelize) to communicate with the MySQL database. The response then follows the opposite direction back to the client.

Additionally, application logs are collected and managed using Winston.

## Containerization Process
1. Before containerization, we need to make sure the application works correctly in the local environment.  
Using the 'node server.js' command in the terminal from 'DevOps Projects\Containerization Projects\Express-API-Containerized\src', the API is now connected to the database and running on port 3000 of my machine.

2. Pre Containerization API analysis
    - Language: JavaScript
    - Dependecies: express, express security libs like jsonwebtoken, bycrypt, http, etc, winston for loggin, mysql2 and sequeize for orm and database connection. 
    - Runtime: Node
    - Port 3000
    - Startup Command: node server.js

3. Dockerfile  
These are the commands used in the Dockerfile to create a Docker image:

    - FROM node:20-alpine            // Creates the base image using Node.js version 20 as the runtime with Alpine Linux as the operating system
    - WORKDIR /app                   // Creates and sets /app as the working directory inside the container
    - COPY package*.json ./          // Copies the package.json and package-lock.json files, which contain the Express API dependencies
    - RUN npm install --production   // Installs only the production dependencies inside the container
    - COPY . .                       // Copies the application source code into the /app directory inside the container
    - EXPOSE 3000                    // Indicates that the application runs on port 3000 inside the container
    - CMD ["node", "server.js"]      // Starts the application by running the node server.js command when the container starts

4. Dockerignore  
The following files and folders are excluded from being copied into the container when the Docker image is created:

    - node_modules
    - .git
    - logs
    - README.md

## Running the Container

## Container Testing
test the dockerignore
