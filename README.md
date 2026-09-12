# Task Manager

A full-stack task management application built with **Spring Boot** and **Angular**, providing a RESTful API for task management and a responsive web interface.

The project was developed to demonstrate practical skills in **Java backend development, REST APIs, Angular frontend development, PostgreSQL, Docker, Git and software architecture**.

---

## Features

* Create tasks
* Display all tasks
* Update tasks
* Delete tasks
* Manage task status
* RESTful API
* Angular frontend
* PostgreSQL database
* Backend/frontend separation
* Docker-ready architecture
* Git/GitHub version control

### Task statuses

A task can have one of the following statuses:

* `TODO`
* `IN_PROGRESS`
* `DONE`

---

## Architecture

The application follows a simple **client-server architecture**:

```text
                    ┌──────────────────────┐
                    │      Angular        │
                    │      Frontend       │
                    │                     │
                    │  Task List / Forms  │
                    └──────────┬───────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Spring Boot     │
                    │       Backend       │
                    │                      │
                    │ Controller           │
                    │ Service              │
                    │ Repository           │
                    │ Entity               │
                    └──────────┬───────────┘
                               │
                         Spring Data JPA
                               │
                               ▼
                    ┌──────────────────────┐
                    │      PostgreSQL      │
                    │       Database       │
                    └──────────────────────┘
```

### Backend flow

```text
HTTP Request
     │
     ▼
TaskController
     │
     ▼
TaskService
     │
     ▼
TaskRepository
     │
     ▼
PostgreSQL
```

This separation keeps the application organized and makes the backend easier to maintain and extend.

---

## Technologies

### Backend

* Java 21
* Spring Boot
* Spring Web
* Spring Data JPA
* Jakarta Validation
* Maven
* REST API

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Angular HTTP Client

### Database

* PostgreSQL

### DevOps & Tools

* Docker
* Docker Compose
* Git
* GitHub
* Postman
* Visual Studio Code / Eclipse

---

## Project Structure

```text
taskmanager/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── ismail/
│       │           └── taskmanager/
│       │               ├── controller/
│       │               │   └── TaskController.java
│       │               │
│       │               ├── entity/
│       │               │   └── Task.java
│       │               │
│       │               ├── repository/
│       │               │   └── TaskRepository.java
│       │               │
│       │               └── service/
│       │                   └── TaskService.java
│       │
│       └── resources/
│           └── application.properties
│
├── frontend/
│   ├── src/
│   │   └── app/
│   │       ├── components/
│   │       │   └── task-list/
│   │       │
│   │       ├── models/
│   │       │   └── task.ts
│   │       │
│   │       └── services/
│   │           └── task.ts
│   │
│   ├── package.json
│   └── angular.json
│
├── pom.xml
├── docker-compose.yml
└── README.md
```

---

## REST API

The backend exposes REST endpoints for task management.

### Get all tasks

```http
GET /api/tasks
```

### Get a task

```http
GET /api/tasks/{id}
```

### Create a task

```http
POST /api/tasks
Content-Type: application/json
```

Example:

```json
{
  "title": "Learn Angular",
  "description": "Build the frontend of the Task Manager",
  "status": "TODO"
}
```

### Update a task

```http
PUT /api/tasks/{id}
Content-Type: application/json
```

### Delete a task

```http
DELETE /api/tasks/{id}
```

---

## Running the Project Locally

### Prerequisites

Make sure the following tools are installed:

* Java 21
* Maven
* Node.js
* npm
* Angular CLI
* PostgreSQL
* Git

---

## 1. Clone the repository

```bash
git clone https://github.com/xdsml/taskmanager.git
cd taskmanager
```

---

## 2. Start the Backend

From the project root:

```bash
mvn spring-boot:run
```

The Spring Boot application will start on:

```text
http://localhost:8080
```

---

## 3. Start the Angular Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

The Angular application will be available at:

```text
http://localhost:4200
```

---

## 4. Database Configuration

The backend uses PostgreSQL.

Configure the database connection in:

```text
src/main/resources/application.properties
```

Example configuration:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/taskmanager
spring.datasource.username=postgres
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Replace the database credentials with your local PostgreSQL configuration.

---

## Docker

Docker support is included to simplify the development environment.

The planned Docker setup will provide:

```text
Angular
   │
   ▼
Spring Boot
   │
   ▼
PostgreSQL
```

The application can be started using:

```bash
docker compose up --build
```

To stop the containers:

```bash
docker compose down
```

---

## Testing the API

The REST API can be tested using tools such as:

* Postman
* curl
* Angular frontend

Example:

```bash
curl http://localhost:8080/api/tasks
```

---

## Screenshots

Screenshots of the application will be added here.

### Task Dashboard

![Task Dashboard](docs/screenshots/task-list.png)

### Create Task

![Create Task](docs/screenshots/create-task.png)

### Update Task

![Update Task](docs/screenshots/update-task.png)

---

## Future Improvements

Possible future improvements include:

* User authentication and authorization
* JWT security
* Task filtering and search
* Pagination
* Task priorities
* Due dates
* User-specific task management
* Unit and integration testing
* Production Docker deployment
* CI/CD with GitHub Actions

---

## What This Project Demonstrates

This project demonstrates practical experience with:

* Object-Oriented Programming with Java
* Spring Boot application development
* REST API design
* Layered backend architecture
* JPA and relational databases
* Angular component-based development
* TypeScript
* HTTP communication between frontend and backend
* PostgreSQL
* Docker
* Git and GitHub
* Full-stack application development

---

## Author

**Ismail Gherram**

Computer Science Engineer | Full Stack Developer

GitHub:
https://github.com/xdsml

---

## License

This project is developed for educational and portfolio purposes.
