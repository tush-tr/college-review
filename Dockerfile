FROM node:14
WORKDIR /app
COPY . /app/
RUN npm install
ENV NODE_ENV=production
CMD ["node","server.js"]