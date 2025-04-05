# Task Manager Application

## Overview

This project is a **Task Management System** that consists of a **Spring Boot** backend and an **Angular** frontend. The backend serves APIs for creating, updating, deleting, and retrieving tasks, while the frontend allows users to interact with these APIs to manage tasks. The app is containerized using **Docker** and uses **MySQL** for storage.

### Features:
- **Task CRUD operations**: Create, Read, Update, Delete tasks.
- **User Interface**: A frontend built with Angular for an interactive UI.
- **MySQL Database**: Stores task information.
- **Dockerized Setup**: Use of Docker to create isolated environments for the backend, frontend, and database.
- **Nginx**: (Optional) Used for serving the Angular app in a production environment.

## Technologies Used

- **Backend**: Spring Boot (Java)
- **Frontend**: Angular
- **Database**: MySQL
- **Containerization**: Docker
- **Reverse Proxy (Optional)**: Nginx (for production)
- **CI/CD**: GitHub Actions

## Project Structure


## Requirements

Before you begin, ensure you have the following installed:

- Docker
- Docker Compose
- Node.js (for frontend build)
- Java (for backend build)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/thisarathejana20/Task-Manager.git
cd Task-Manager
```
### 2. Build the Application

```bash
cd backend
mvn clean install

Alternatively
docker build -f backend/Dockerfile -t task-manager-backend .

cd frontend
npm install
npm run build

Alternatively
docker build -f frontend/Dockerfile -t task-manager-frontend .

In the root directory
docker-compose up --build
```

### 3. Access the Application
Frontend: Navigate to http://localhost:4200 in your browser to access the Angular app.

Backend API: The Spring Boot backend will be running on http://localhost:8080.





