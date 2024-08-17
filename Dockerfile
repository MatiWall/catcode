# Stage 1: Build the React app
FROM node:latest AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN yarn install

# Build the React app
RUN yarn workspace app build

# Stage 2: Serve the built files using Nginx
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=builder /app/packages/app/dist /usr/share/nginx/html

COPY ./react-app.conf /etc/nginx/conf.d/react-app.conf
# Expose port 80
EXPOSE 80

# Start Nginx web server
CMD ["nginx", "-g", "daemon off;"]
