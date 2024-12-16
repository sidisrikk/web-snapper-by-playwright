# Use the official Node.js image with Playwright dependencies
FROM mcr.microsoft.com/playwright:v1.49.1-noble

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Run the script by default when the container starts
CMD ["npm", "start"]
