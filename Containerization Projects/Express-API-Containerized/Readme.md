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
    - CMD ["node", "src/server.js"]  // Starts the application by running the node server.js command when the container starts

4. Dockerignore  
The following files and folders are excluded from being copied into the container when the Docker image is created:

    - node_modules
    - .git
    - logs
    - README.md

5. Building the Image and Running the Container
- Building the Image: In the app root directory, run the following command in the terminal: docker build -t express-api-containerized .
    - It will create a Docker image named express-api-containerized from the Dockerfile and ignore the files and folders listed in the .dockerignore file.
    - -t allows you to assign a readable name (tag) to the image. Without it, Docker will generate a random image ID instead.
    - . tells Docker to build the image from the current directory (where the Dockerfile is located).
- Running the Container: In the root directory again, run: docker run --name Auth_API_Container -p 3000:3000 express-api-containerized
    - It creates a container named Auth_API_Container from the built image and starts it.
    - -p maps the host machine port to the container port used by the application.
    - The first 3000 is the host (machine) port, and the second 3000 is the container (Docker) port where the app is running.

## Container Testing
test the dockerignore
