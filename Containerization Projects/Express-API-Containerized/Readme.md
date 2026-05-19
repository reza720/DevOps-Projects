## About the API

This is a simple API developed with Express.js. It has two user roles: Admin and Customer. Both require authentication and authorization.

The API follows a layered architecture where requests move from routes to middleware. If a request passes through the middleware successfully, the controller triggers the services, the services interact with the models, and the models use the ORM (Sequelize) to communicate with the MySQL database. The response then follows the opposite direction back to the client.

Additionally, application logs are collected and managed using Winston.

## Containerization Process




## Running the Container

## Container Testing