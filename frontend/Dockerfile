FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV REACT_APP_API_URL=http://backend:5000
COPY . .
RUN npm run build