FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Set production environment
ENV NODE_ENV production

# Build the application
RUN npm run build

# Expose the port the app runs on
ENV PORT 3000
ENV HOST 0.0.0.0
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 