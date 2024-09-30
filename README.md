# AI CHATBOT MERN

This is my first project. It is an AI chatbot that uses the GPT 3.5-Turbo technology directly from the OpenAI API. It was built using the MERN stack and a MongoDB database.

## Table of Contents
1. [Installation](#installation)
2. [Video Presentation](#video-presentation)


## Installation

### Setting Up Environment Variables
Create a `.env` File:

Example `.env` File Structure
Here is what your `.env` file should look like after configuration:

OPEN_AI_SECRET=your_open_ai_secret
OPEN_AI_ORGANIZATION_ID=your_open_ai_organization_id
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret
PORT=port_number


**1) In the backend directory, create a new .env file by copying the existing .env.example file:**
``
cp backend/.env.example backend/.env
``  
  
**2) Configure MongoDB and OpenAI:**
Open the backend/.env file and add your own values for the following:

OpenAI API Secret Key
OPEN_AI_SECRET=your_open_ai_secret

OpenAI Organization ID
OPEN_AI_ORGANIZATION_ID=your_open_ai_organization_id

MongoDB Connection String
MONGODB_URL=your_mongodb_url

JWT Secret Key for Authentication
JWT_SECRET=your_jwt_secret

Cookie Secret Key for Session Management
COOKIE_SECRET=your_cookie_secret

Application Port Number
PORT=port_number

**3) Where to Get These Values:**

*a) OpenAI API Key (OPENAI_API_KEY):*

Go to OpenAI's API keys page and create an API key if you haven’t already.
Copy the key and paste it in place of your_openai_api_key in the .env file.
Save and Close the .env File.
 
*b) OPEN_AI_ORGANIZATION_ID:*

This is the unique identifier for your OpenAI organization. You can find it in your OpenAI dashboard. Replace your_open_ai_organization_id with the organization ID provided there.

*c) MongoDB Connection String (MONGO_URI):*

If you're using MongoDB Atlas, create an account and set up a new cluster. Once created, go to the cluster’s dashboard, click on Connect, and follow the instructions to get your connection string.
If you're using a local MongoDB instance, you can use the local connection string:

MONGO_URI=mongodb://localhost:27017/mydatabase

*d) JWT_SECRET:*

This secret key is used to sign and verify JSON Web Tokens (JWTs) for user authentication. Replace your_jwt_secret with a long, random string. For security, ensure this value is unique and not easily guessable.

*e) COOKIE_SECRET:*

This secret key is used for signing cookies to ensure session integrity. Replace your_cookie_secret with a random, secure string. This should also be unique and private to prevent session tampering

*f) PORT:*

The port number on which the backend server will run. This can be any available port on your system, such as 3001, 5000, or any other number. If you're unsure, you can leave it like I did at 5000.

**4) Start:**
*a) Clone the repository*  
`
git clone https://github.com/Mirza404/ai-chatbot-MERN.git
`  
  
*b) Navigate to the project directory*  
`
cd ai-chatbot-MERN
`  
  
*c) Install dependencies*  
`
npm install
`  
  
*d) Start the application*  
`
npm start
`
  
## Video Presentation

