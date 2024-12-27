# Stage 1: Build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=5000
ENV MONGO_URI=mongodb+srv://docker:py2ud9blyo5uCq1v@cluster0.hma5hyp.mongodb.net/mydatabase


# Stage 2: Production
FROM node:18-slim AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
RUN npm install --production
EXPOSE 5000
RUN npm install -g pm2
CMD ["pm2-runtime", "dist/server.js"]

