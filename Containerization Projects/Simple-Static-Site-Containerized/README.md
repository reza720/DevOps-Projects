## About the Site
- Type: Static Website
- Programming Language: HTML, CSS, JavaScript
- Runtime: Web Browser
- Dependencies: None
- State: Stateless
- Environment Variables: None
- Port: None
- Startup Command: None

This is a simple static website built with HTML, CSS, and JavaScript. No framework such as React.js is used. The main goal of this project is to demonstrate how to Dockerize such applications rather than how to build them.

## Containerization Process
Since this is a static website, it needs a web server to serve it to clients. Here, I chose Nginx as the web server.

1. **Dockerfile:**
Here are the commands used in the Dockerfile:
- `FROM nginx:alpine` The base image of Nginx and the lightweight Alpine Linux OS it runs on.
- `RUN rm -rf /usr/share/nginx/html/*` Removes the default static files provided by Nginx.
- `COPY . /usr/share/nginx/html` Copies your static website files (HTML, CSS, JS) into the Nginx web directory.
- `EXPOSE 80` Exposes port 80, which is the default HTTP port used by Nginx inside the container.
- `CMD ["nginx", "-g", "daemon off;"]` Starts the Nginx server in the foreground so the container keeps running.

2. **Building the Image:**
In the root directory of the website, the following command is run: `docker build -t static-website .`; This command builds a Docker image named static-website using the Dockerfile in the current directory. 

3. **Running the Image:**
In the root directory, run the following command in the terminal: `docker run --name static-website-container -p 8080:80 static-website`; This command:
- Creates and starts a container named static-website-container
- Maps port 80 (inside the container, where Nginx is running) to port 8080 on the host machine
- Runs the container using the Docker image static-website that was previously built

Now, if I go to http://localhost:8080, I can see my website’s webpage.

To check if the container is running, open a new terminal and run: `docker ps` If it shows the details of a running container, then it is running successfully.

To stop the container, run the following command in the terminal: `docker stop static-website-container`

