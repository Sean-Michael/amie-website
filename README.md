# Amie Website

Welcome to the **Amie Website**, a portfolio for showcasing artwork.

## Table of Contents
- [About](#about)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Containerization](#containerization)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## About
The Amie Website is a portfolio platform designed for artists to showcase their work, biography, and creative journey. It includes a gallery of featured works, detailed artwork pages, and a responsive design for seamless viewing across devices.

---

## Key Features
- **Dynamic Portfolio:** Display featured works with images, titles, and descriptions.
- **Responsive Design:** Built with TailwindCSS for a modern and mobile-friendly experience.
- **Containerized Deployment:** Fully containerized using Docker and Docker Compose for easy deployment.
- **Scalable Backend:** Powered by Node.js, Express, and MongoDB for robust data handling.

---

## Technologies Used
- **Frontend:** TailwindCSS, Handlebars.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Containerization:** Docker, Docker Compose
- **Other Tools:** dotenv for environment variables, Mongoose for MongoDB object modeling

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [MongoDB](https://www.mongodb.com/) (if running locally)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/amie-website.git
   cd amie-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/artistdb
   PORT=3000
   ```

4. Build TailwindCSS:
   ```bash
   npx tailwindcss -i ./public/css/styles.css -o ./public/css/output.css --minify
   ```

5. Start the application:
   ```bash
   npm start
   ```

6. Visit the app at `http://localhost:3000`.

---

## Deployment

### Local Deployment
1. Ensure MongoDB is running locally or update the `MONGO_URI` in `.env` to point to your database.
2. Start the app using:
   ```bash
   npm start
   ```

### Docker Deployment
1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. The app will be available at `http://localhost:3000`.

---

## Containerization
The application is fully containerized using Docker and Docker Compose. The `docker-compose.yml` file defines two services:
- **App Service:** Runs the Node.js application.
- **MongoDB Service:** Provides a MongoDB instance for the app.

### Key Docker Commands
- Build the containers:
  ```bash
  docker-compose build
  ```
- Start the containers:
  ```bash
  docker-compose up
  ```
- Stop the containers:
  ```bash
  docker-compose down
  ```

---

## Future Improvements
For a list of planned features and improvements, see the [TODO.md](./todo.md) file.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---
