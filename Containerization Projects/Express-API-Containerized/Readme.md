## About the Application
  - Type: Rest API built with Express.js
  - Programming Language: JavaScript
  - Runtime: Node.js
  - Dependecies: express, security libraries, winston, ORM 
  - State: Stateless 
  - Environment Variables: None
  - Port 3000
  - Startup Command: node server.js

Before containerization, we need to make sure the application works correctly in the local environment.  
Using the `node server.js` command in the terminal from `DevOps Projects\Containerization Projects\Express-API-Containerized\src`, the API is now connected to the database and running on port 3000 of my machine.

## Containerization Process
1. Dockerfile  
These are the commands used in the Dockerfile to create a Docker image:

    - `FROM node:20-alpine`  Creates the base image using Node.js version 20 as the runtime with Alpine Linux as the operating system
    - `WORKDIR /app&nbsp`  Creates and sets /app as the working directory inside the container
    - `COPY package*.json ./`  Copies the package.json and package-lock.json files, which contain the Express API dependencies
    - `RUN npm install --production`  Installs only the production dependencies inside the container
    - `COPY . .`  Copies the application source code into the /app directory inside the container
    - `EXPOSE 3000`  Indicates that the application runs on port 3000 inside the container
    - `CMD ["node", "src/server.js"]`  Starts the application by running the node server.js command when the container starts

2. Dockerignore  
The following files and folders are excluded from being copied into the container when the Docker image is created:
    - node_modules
    - .git
    - logs
    - README.md

3. Building the Image 
In the app root directory, run the following command in the terminal: `docker build -t express-api-containerized .`
    - It creates a Docker image named express-api-containerized from the Dockerfile.
    - -t allows to assign a readable name to the image. Without it, Docker will generate a random image ID instead.
    - . tells Docker to build the image from the current directory (where the Dockerfile is located).

4. Running the Container: 
In the root directory, run: `docker run --name Auth_API_Container -p 3000:3000 express-api-containerized`
    - It creates a container named Auth_API_Container from the built image and starts it.
    - -p maps the host machine port to the container port used by the application.
    - The first 3000 is the host (machine) port, and the second 3000 is the container (Docker) port where the app is running.


