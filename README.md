# 🚀 Task Management System (Spring Boot + JWT)

## 📌 Overview
This project is a scalable REST API with JWT Authentication and Role-Based Access Control. It includes a simple frontend UI to test APIs.

---
## 🛠 Tech Stack
- Backend: Spring Boot (Java)
- Security: Spring Security + JWT
- Database: MySQL
- Frontend: HTML, CSS, JavaScript
- API Docs: Swagger
---
## 🔐 Features

### Authentication
- User Registration
- User Login
- Password hashing using BCrypt
- JWT Token-based authentication

### Role-Based Access
- USER → Can create & view tasks
- ADMIN → Can delete tasks

### Task Management
- Create Task
- Get All Tasks
- Delete Task (Admin only)

### Security
- JWT Filter for request validation
- Protected APIs
---
## 🌐 API Endpoints

### Auth APIs
- POST `/api/v1/auth/register`
- POST `/api/v1/auth/login`

### Task APIs
- POST `/api/v1/tasks`
- GET `/api/v1/tasks`
- DELETE `/api/v1/tasks/{id}`
---
## 🧪 API Testing
### Swagger UI
http://localhost:8080/swagger-ui.html
### Postman
Import the provided Postman collection.
---
## ⚙️ Setup Instructions
1. Clone repo
2. Configure MySQL in `application.properties`
3. Run project:
Run As → Spring Boot App

4. Open:
http://localhost:8080/index.html
---
## 📊 Scalability Note

This project can be scaled using:
- Microservices architecture
- Load balancing
- Redis caching
- Docker containerization
- Horizontal scaling using Kubernetes
---
## 👨‍💻 Author
Nirmal Fayake
