# Build sources
FROM node:11 as beachpoints-build
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY src ./src
COPY public ./public
RUN npm install -f
RUN npm audit fix
RUN npm run build

# Serve beachpoints
FROM nginx:1.12-alpine
COPY --from=beachpoints-build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]