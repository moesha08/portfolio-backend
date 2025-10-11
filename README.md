# Portfolio Backend API

## COMP229 - Web Application Development - Assignment 2
Student: Moesha Aurelle  
Course: COMP229 - Web Application Development  
Institution: Centennial College  
Date: October, 11 2025

## 📋 Project Overview

A complete Node.js Express REST API backend for a portfolio application. This backend provides full CRUD operations for managing contacts, projects, services, and users with MongoDB integration.

## 🚀 Live Deployment

**Live API URL:** https://portfolio-backend-edky.onrender.com

## 🛠️ Technologies Used

- **Backend Framework:** Node.js + Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Middleware:** CORS, Morgan, Express JSON, Error Handling
- **Deployment:** Render.com
- **Database Hosting:** MongoDB Atlas (Cloud)
- **Testing:** Thunder Client / Postman

## 📁 Project Structure

```
portfolio-backend/
├── config/
│   └── database.js          # MongoDB connection configuration
├── controllers/
│   ├── contactController.js # Contact CRUD operations
│   ├── projectController.js # Project CRUD operations
│   ├── serviceController.js # Service CRUD operations
│   └── userController.js    # User CRUD operations
├── models/
│   ├── Contact.js          # Contact Mongoose schema
│   ├── Project.js          # Project Mongoose schema
│   ├── Service.js          # Service Mongoose schema
│   └── User.js             # User Mongoose schema
├── routes/
│   ├── contactRoutes.js    # Contact API routes
│   ├── projectRoutes.js    # Project API routes
│   ├── serviceRoutes.js    # Service API routes
│   └── userRoutes.js       # User API routes
├── middleware/
│   └── errorHandler.js     # Custom error handling middleware
├── .env                    # Environment variables
├── server.js               # Main server file
└── package.json            # Dependencies and scripts
```

## 🎯 API Endpoints

### Root Endpoint
- **GET** `/` - Welcome message and API information

### Contacts API
- **GET** `/api/contacts` - Get all contacts
- **GET** `/api/contacts/:id` - Get contact by ID
- **POST** `/api/contacts` - Create new contact
- **PUT** `/api/contacts/:id` - Update contact by ID
- **DELETE** `/api/contacts/:id` - Delete contact by ID
- **DELETE** `/api/contacts` - Delete all contacts

### Projects API
- **GET** `/api/projects` - Get all projects
- **GET** `/api/projects/:id` - Get project by ID
- **POST** `/api/projects` - Create new project
- **PUT** `/api/projects/:id` - Update project by ID
- **DELETE** `/api/projects/:id` - Delete project by ID
- **DELETE** `/api/projects` - Delete all projects

### Services API
- **GET** `/api/services` - Get all services
- **GET** `/api/services/:id` - Get service by ID
- **POST** `/api/services` - Create new service
- **PUT** `/api/services/:id` - Update service by ID
- **DELETE** `/api/services/:id` - Delete service by ID
- **DELETE** `/api/services` - Delete all services

### Users API
- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get user by ID
- **POST** `/api/users` - Create new user
- **PUT** `/api/users/:id` - Update user by ID
- **DELETE** `/api/users/:id` - Delete user by ID
- **DELETE** `/api/users` - Delete all users

## 🗄️ Database Models

### Contact Model
```javascript
{
  firstname: String,    // Required
  lastname: String,     // Required
  email: String,        // Required, validated
  message: String,      // Optional
  createdAt: Date,      // Auto-generated
  updatedAt: Date       // Auto-generated
}
```

### Project Model
```javascript
{
  title: String,        // Required
  description: String,  // Required
  technologies: [String], // Array of technologies
  githubUrl: String,    // Optional
  liveUrl: String,      // Optional
  image: String,        // Optional
  featured: Boolean,    // Default: false
  createdAt: Date,      // Auto-generated
  updatedAt: Date       // Auto-generated
}
```

### Service Model
```javascript
{
  name: String,         // Required
  description: String,  // Required
  icon: String,         // Optional
  price: Number,        // Optional
  duration: String,     // Optional
  createdAt: Date,      // Auto-generated
  updatedAt: Date       // Auto-generated
}
```

### User Model
```javascript
{
  username: String,     // Required, unique
  email: String,        // Required, unique, validated
  password: String,     // Required, hashed
  role: String,         // Default: 'user'
  createdAt: Date,      // Auto-generated
  updatedAt: Date       // Auto-generated
}
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/moesha08/portfolio-backend.git
   cd portfolio-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the API**
   - Local: http://localhost:5000
   - API Documentation: http://localhost:5000

## 🚀 Deployment

This application is deployed on **Render.com** with the following configuration:

- **Build Command:** `npm install`
- **Start Command:** `node server.js`
- **Environment:** Production
- **Database:** MongoDB Atlas (Cloud)

## 🧪 Testing the API

### Using Thunder Client (VS Code Extension)

1. Install Thunder Client from VS Code extensions
2. Create a new request
3. Test endpoints with appropriate methods and JSON bodies

### Example: Create a Contact
```http
POST /api/contacts
Content-Type: application/json

{
  "firstname": "Noesha",
  "lastname": "Aurelle",
  "email": "moeshaaurelle0@gmail.com",
  "message": "Interested in your web development services"
}
```

### Example Response
```json
{
  "success": true,
  "message": "Contact created successfully",
  "data": {
    "firstname": "Moesha",
    "lastname": "Aurelle",
    "email": "moeshaaurelle0@gmail.com",
    "message": "Interested in your web development services",
    "_id": "67a1b2c3d4e5f67890123456",
    "createdAt": "2025-10-11T03:05:59.621Z",
    "updatedAt": "2025-10-11T03:05:59.621Z"
  }
}
```

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Application environment | `development` |
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | - |
| `JWT_SECRET` | Secret key for JWT tokens | - |

## 📊 Features Implemented

### ✅ Assignment Requirements Met
- [x] Express.js server with proper configuration
- [x] MongoDB database integration with Mongoose
- [x] RESTful API with CRUD operations for all models
- [x] Separate controllers, models, and routes
- [x] Middleware implementation (CORS, Morgan, Error Handling)
- [x] Environment configuration
- [x] API testing with Thunder Client
- [x] Live deployment on Render.com
- [x] MongoDB Atlas cloud database

### ✅ Additional Features
- [x]  Error handling
- [x] Input validation and sanitization
- [x] Automatic timestamps
- [x] Response standardization
- [x] Comprehensive API documentation

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify your MongoDB Atlas connection string
   - Check network access in MongoDB Atlas
   - Ensure database user credentials are correct

2. **Port Already in Use**
   - Change PORT in .env file
   - Kill existing process using the port

3. **Environment Variables Not Loading**
   - Ensure .env file is in root directory
   - Restart the server after changing .env

## 📝 Assignment Submission

This project fulfills all requirements for **COMP229 - Assignment 2**:

- ✅ Backend development with Node.js and Express
- ✅ MongoDB database with Mongoose ODM
- ✅ RESTful API implementation
- ✅ CRUD operations for all models
- ✅ Middleware configuration
- ✅ Error handling
- ✅ API testing and documentation
- ✅ Live deployment

## 👨‍💻 Developer

**Moesha Deutou**  
COMP229 - Web Application Development  
Centennial College  
Fall 2025
