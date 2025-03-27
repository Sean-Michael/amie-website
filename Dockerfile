# Use the official Node.js LTS image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build Tailwind output (CSS bundling)
RUN npx tailwindcss -i ./public/css/styles.css -o ./public/css/output.css --minify

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]