
A backend application built with Node.js and Express.js to manage security-related tasks such as domain and URL management. It includes features like adding, fetching, and deleting records and provides comprehensive, interactive API documentation using Swagger.

Features
- Domain Management: Add, fetch, and delete domain records.
- URL Management: Add, fetch, and delete URLs.
- Interactive API Documentation: Accessible via Swagger UI.
- Scalable Architecture: Organized project structure for maintainability.
- Environment Configuration: Customizable using a .env file.

Tech Stack
- Node.js: JavaScript runtime for server-side programming.
- Express.js: Framework for building RESTful APIs.
- MongoDB: NoSQL database for data persistence.
- Mongoose: ODM for defining MongoDB schemas.
- Swagger: Generates interactive API documentation.
- dotenv: Manages environment variables.

Project Structure
VRV_Security/
├── app.js                 # Application entry point
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
├── package-lock.json      # Dependency lockfile
├── swagger.js             # Swagger configuration
├── controllers/           # Logic for handling API requests
├── models/                # MongoDB schemas and database logic
├── middlewares/           # Custom middleware functions
├── routes/                # API endpoints
└── node_modules/          # Installed dependencies

Prerequisites
Make sure you have the following installed on your system:
- Node.js (v14.x or later)
- MongoDB (local or remote instance)

Getting Started
1. Clone the Repository
git clone https://github.com/your-username/VRV_Security.git
cd VRV_Security

2. Install Dependencies
npm install

3. Set Up Environment Variables
Create a .env file in the root directory and configure it as follows:
MONGO_URI=mongodb://localhost:27017/vrv_security_db
PORT=3001

4. Run the Application
npm start
The application will run at http://localhost:3001.

API Endpoints

Domain Management
1. POST /domains
   Adds a new domain.
   Request Body:
   {
     "domainName": "example.com"
   }
   Response:
   - 201: Domain added successfully.
   - 400: Invalid request.
   - 500: Server error.

2. GET /domains
   Fetches a list of all domains.
   Response:
   - 200: List of domains.
   - 404: No domains found.
   - 500: Server error.

3. DELETE /domains/:domainName
   Deletes a domain by its name.
   Response:
   - 200: Domain deleted successfully.
   - 404: Domain not found.
   - 500: Server error.

URL Management
1. POST /urls
   Adds a new URL.
   Request Body:
   {
     "url": "https://example.com"
   }
   Response:
   - 201: URL added successfully.
   - 400: Invalid request.
   - 500: Server error.

2. GET /urls
   Fetches a list of all URLs.
   Response:
   - 200: List of URLs.
   - 404: No URLs found.
   - 500: Server error.

3. DELETE /urls/:url
   Deletes a URL by its value.
   Response:
   - 200: URL deleted successfully.
   - 404: URL not found.
   - 500: Server error.

Swagger Integration
- The API documentation is available through Swagger.
- Access it at http://localhost:3001/api-docs.
- Swagger UI allows for easy exploration and testing of the API endpoints.

