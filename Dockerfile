# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Install build tools
RUN apk add --no-cache python3 make g++ 

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue app
RUN npm run build

# Use a minimal server to serve the app
FROM nginx:stable-alpine

# Copy the built files from the previous stage
COPY --from=0 /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Command to run the server
CMD ["nginx", "-g", "daemon off;"]
