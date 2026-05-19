## About the API

This is a simple API developed with Express.js. It has two user roles: Admin and Customer. Both require authentication and authorization.

The API follows a layered architecture where requests move from routes to middleware. If a request passes through the middleware successfully, the controller triggers the services, the services interact with the models, and the models use the ORM (Sequelize) to communicate with the MySQL database. The response then follows the opposite direction back to the client.

Additionally, application logs are collected and managed using Winston.

## Containerization Process
1. Before containerization, we need to make sure the application works correctly in the local environment. 
Using the 'node server.js' command in the terminal from DevOps 'Projects\Containerization Projects\Express-API-Containerized\src', the API is now connected to the database and running on port 3000 of my machine.  

2. Pre Containerization API analysis
    - Language: JavaScript
    - Dependecies: express, express security libs like jsonwebtoken, bycrypt, http, etc, winston for loggin, mysql2 and sequeize for orm and database connection. 
    - Runtime: Node
    - Port 3000
    - Startup Command: node server.js

3. Dockerfile

## Running the Container

## Container Testing