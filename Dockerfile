# syntax=docker/dockerfile:1

# --- Stage 1: build the static site ---
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json package-lock.json* ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# --- Stage 2: serve with nginx ---
FROM nginx:alpine AS runtime

# SPA-friendly nginx config (gzip, asset caching, history fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static bundle
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
