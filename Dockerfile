# build environment
FROM node:21-alpine3.17 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install
COPY src src/
COPY public public/
COPY tsconfig.json tsconfig.json
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
