# Secure Notes App

A full-stack web application designed for creating, viewing, and deleting private notes securely. This project was developed as part of Lab 5: User Authentication with Profile Image Upload, adapted to implement a notes management system. It uses Node.js, Express, MongoDB Atlas for the backend, JWT (JSON Web Tokens) for authentication, and bcrypt for password hashing, with a responsive frontend built using HTML, CSS, and JavaScript.

## Features
- **User Authentication**: Secure registration and login with password hashing using bcrypt.
- **JWT Protection**: Notes CRUD (Create, Read, Delete) operations are protected with JWT tokens.
- **Notes Management**: Users can create, view, and delete their own notes.
- **Responsive UI**: A modern, user-friendly interface with a balanced layout and enhanced styling.

## Tech Stack
- **Backend**: Node.js, Express, Mongoose, bcryptjs, jsonwebtoken
- **Database**: MongoDB Atlas (cloud-based)
- **Frontend**: HTML, CSS (inline styling), JavaScript (fetch API)

## Setup Instructions
1. **Clone the Repository**:
git clone https://github.com/anirudhlohiya/SecureNotesApp.git

2. **Install Dependencies**:
npm install

3. **Configure Environment Variables**:
- Create a `.env` file in the root directory with the following content:
DATABASE_URL=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
- Replace `your_mongodb_uri` with your MongoDB Atlas connection string (e.g., `mongodb+srv://notesuser:password@cluster.mongodb.net/notesdb?...`).
- Replace `your_secret_key` with a strong, unique string (e.g., a 32-character random mix of letters, numbers, and symbols).
- **Note**: Do not commit the `.env` file to GitHub (it’s ignored via `.gitignore`).

4. **Run the Server**:
node server.js


5. **Open the Application**:
- Open `index.html` in a web browser while the server is running on `http://localhost:5000`.
- Register a new user, log in, and start managing notes.

## Screenshots
- **Main Interface**: [main.jpg](./screenshots/main.jpg)  
_Shows the register and login forms side by side on the desktop._
- **Viewing Notes**: [viewingnotes.jpg](./screenshots/viewingnotes.jpg)  
_Displays the notes section with a created note and delete option._

## Testing
- Tested API endpoints (e.g., `/register`, `/login`, `/notes`) using the browser and manual fetch requests.
- Verified data persistence in MongoDB Atlas under the `notesdb` database with `users` and `notes` collections.
- Ensured JWT authentication blocks unauthorized access to protected routes.

## Challenges and Solutions
- **Initial MongoDB Connection Issue**: Fixed by removing a space after `DATABASE_URL=` in the `.env` file.
- **UI Improvement**: Enhanced from a vertical layout to a side-by-side design, improving horizontal space usage, with a new color scheme (teal, beige, orange) for better aesthetics.
- **Form Persistence**: Resolved input fields retaining text by adding `.reset()` after form submissions.

## Submission
This project was submitted for Lab 5 as part of the course requirements. The GitHub link[](https://github.com/anirudhlohiya/SecureNotesApp) serves as the primary submission, accompanied by a report document with the above screenshots and details.


---
*Developed by Anirudh Lohiya on September 21, 2025.*