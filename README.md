Portfolio Backend API
COMP229 - Web Application Development - Assignment 2
Student: Moesha Aurelle
Course: COMP229 - Web Application Development
Institution: Centennial College
Date: October 2024
Project Overview
A complete Node.js Express REST API backend for a portfolio application. This backend provides full CRUD operations for managing contacts, projects, services, and users with MongoDB integration.
Live Deployment
Live API URL: https://portfolio-backend-edky.onrender.com
Technologies Used
- Backend Framework: Node.js + Express.js
- Database: MongoDB with Mongoose ODM
- Authentication: JWT (JSON Web Tokens)
- Middleware: CORS, Morgan, Express JSON, Error Handling
- Deployment: Render.com
- Database Hosting: MongoDB Atlas (Cloud)
- Testing: Thunder Client / Postman
API Endpoints
Includes full CRUD endpoints for Contacts, Projects, Services, and Users.
### Root Endpoint
contacts Methods 	Urls 	Actions 
GET 	api/contacts 	get all contacts 
GET 	api/contacts/:id 	get contacts by id 
POST 	api/contacts 	add new contact 
PUT 	api/contacts/:id 	update contact by id 
DELETE 	api/contacts/:id 	remove contact by id 
DELETE 	api/contacts 	remove all contacts 

users Methods 	Urls 	Actions 
GET 	api/users 	get all users 
GET 	api/users/:id 	get users by id 
POST 	api/users 	add new user 
PUT 	api/users/:id 	update user by id 
DELETE 	api/users/:id 	remove user by id 
DELETE 	api/users 	remove all users 

projects Methods 	Urls 	Actions 
GET 	api/projects 	get all projects 
GET 	api/projects/:id 	get projects by id 
POST 	api/projects 	add new project 
PUT 	api/projects/:id 	update project by id 
DELETE 	api/projects/:id 	remove project by id 
DELETE 	api/projects 	remove all projects 
services Methods 	Urls 	Actions 
GET 	api/services 	get all services 
GET 	api/services/:id 	get services by id 
POST 	api/services 	add new service 
PUT 	api/services/:id 	update service by id 
DELETE 	api/services/:id 	remove service by id 
DELETE 	api/services 	remove all services 
 

Database Models
Includes models for Contact, Project, Service, and User, each with timestamps and schema validation.
⚙️ Installation & Setup
Prerequisites
o	API Documentation: http://localhost:5000
•	Node.js (v14 or higher)
•	MongoDB Atlas account or local MongoDB
•	Git
Local Development
2.	Clone the repository
bash
git clone https://github.com/moesha08/portfolio-backend.git
cd portfolio-backend
3.	Install dependencies
bash
npm install
4.	Environment Configuration
Create a .env file in the root directory:
env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
5.	Start the development server
bash
npm run dev
6.	Access the API
o	Local: http://localhost:5000

🚀 Deployment
This application is deployed on Render.com with the following configuration:
•	Build Command: npm install
•	Start Command: node server.js
•	Environment: Production
•	Database: MongoDB Atlas (Cloud)
🧪 Testing the API
Using Thunder Client (VS Code Extension)
1.	Install Thunder Client from VS Code extensions
2.	Create a new request
3.	Test endpoints with appropriate methods and JSON bodies
📊 Features Implemented
✅ Assignment Requirements Met
•	Express.js server with proper configuration
•	MongoDB database integration with Mongoose
•	RESTful API with CRUD operations for all models
•	Separate controllers, models, and routes
•	Middleware implementation (CORS, Morgan, Error Handling)
•	Environment configuration
•	API testing with Thunder Client
•	Live deployment on Render.com
•	MongoDB Atlas cloud database
Developer
Moesha Aurelle
COMP229 - Web Application Development
Centennial College, Fall 2025
License
This project is developed for educational purposes as part of COMP229 course requirements at Centennial College.
