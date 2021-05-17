FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install

EXPOSE ${PORT}

CMD ["npm", "start"]