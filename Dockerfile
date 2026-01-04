# --- Base
FROM node:20-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# --- Build
FROM base AS build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# --- Test
FROM base AS test
COPY tsconfig.json ./
COPY jest.config.js ./
COPY src ./src
COPY __tests__ ./__tests__
RUN npm test

# --- Production
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
CMD ["node", "dist/main.js"]