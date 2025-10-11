# Portfolio Backend API

Backend REST API for Portfolio application built with Node.js, Express, and MongoDB.

## 🚀 Features
- RESTful API with CRUD operations
- MongoDB database with Mongoose ODM
- Error handling and validation
- CORS enabled for frontend integration

## 🛠️ Technology Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Middleware:** CORS, Morgan, HTTP-errors

## 📊 API Endpoints

### Contacts
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get contact by ID
- `POST /api/contacts` - Create new contact
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact
- `DELETE /api/contacts` - Delete all contacts

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `DELETE /api/projects` - Delete all projects

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service
- `DELETE /api/services` - Delete all services

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `DELETE /api/users` - Delete all users

## 🚀 Installation & Setup

1. **Install dependencies**
   ```bash
   npm install