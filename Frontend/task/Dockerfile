FROM node:18-alpine AS build

WORKDIR /app

COPY Frontend/task/package*.json ./

RUN npm install

COPY Frontend/task/ ./

RUN npm run build

# Use Nginx or another static server to serve the app
FROM nginx:alpine

# Copy the built files from the previous step to the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 4200
EXPOSE 4200

# Start the server
CMD ["nginx", "-g", "daemon off;"]
