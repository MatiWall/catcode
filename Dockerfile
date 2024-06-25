# Stage 1: Build the React app
FROM node:latest AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY packages/app/package.json yarn.lock package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN yarn workspace app build

# Stage 2: Serve the built files using Nginx
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=builder /app/packages/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx web server
CMD ["nginx", "-g", "daemon off;"]
