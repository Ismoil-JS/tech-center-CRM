# Todo List Web Application

## About the App:
This web application is a simple todo list manager built using Node.js and Express.js. It allows users to create, update, and delete tasks, providing a straightforward interface for managing daily activities efficiently.

## Running the App Locally:
To run the application locally, follow these steps:

1. Clone the repository to  local machine:
    git clone   ////////git repo link


2. Navigate to the project directory:
    cd  //// name of project   todo-list-app


3. Install dependencies by running the following command:
    npm install

4. Start the server:
    pnpm run start or pnpm run start:dev for developer environment


5. Open  web browser and go to http://localhost:1111 to access the application.

## Application Dependencies:
The application relies on the following dependencies:
- Express: for building the server-side application.
- EJS: for rendering dynamic content in HTML.
- JOI: for validation.
- DOTENV: for saving constants and can be simply hided in .gitignore.
- CORS: to run application in frontend part.

Install these dependencies using the command:
    pnpm install express ejs cors dotenv joi


## Links:
- [Public Repo on GitHub](https://github.com/username/todo-list-app)
- [Hosted Application](https://-app-name.glitch.me)


## src included->
## config/app.config.js: 
This file is responsible for parsing the port number from the .env file. 

## controller/controller.js: 
This module defines various controller functions for handling HTTP requests related to tasks in todo list application.

-> MAIN_PAGE: Renders the main page (todo.ejs) and retrieves tasks from memory.json.
-> CREATE_TASK: Handles the creation of new tasks. It reads tasks from memory.json, checks for duplicates, adds a new task, and updates the file.
-> UPDATE_TASK: Updates an existing task based on the task ID. It reads tasks from memory.json, finds the task to update, updates it, and writes back to the file.
DELETE_TASK: Deletes a task based on the task ID. It reads tasks from memory.json, finds the task to delete, removes it, and writes back to the file.

## middleware
This directory includes error handling middleware and validation middleware. It's crucial for ensuring the reliability and security of  application.

## db
model/memory.json: This module includes array to interact with the data stored in memory.json. It's responsible for data persistence and retrieval.

## public:
Contains static files (such as CSS and JavaScript) for EJS views.


## routing
route/routes.js: Defines the routes for  application, specifying which controller functions should handle each route.


## schema
schema/creator.schema.js: Contains Joi schemas for validating task creation requests. Joi is a popular validation library for Node.js applications.


## additional helpers
utils: This directory contains helper functions for reading and writing data. These functions interact with memory.json to perform file I/O operations.


## UI
views: Contains the view template (todo.ejs) for rendering the todo list interface. It's responsible for the presentation layer of  application.


## main root file
main.js: This file contains JavaScript code that enhances the functionality of all server.