FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

COPY src ./src
COPY public ./public
COPY . .

# Note: Don't expose ports here, Compose will handle that for us
# Start Next.js in development mode based on the preferred package manager
CMD npm run dev