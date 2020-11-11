FROM node:12-alpine

# Create app directory
WORKDIR /elasticsearch-demo

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

WORKDIR /elasticsearch-demo/dist
RUN mkdir -p routes
RUN npm run build

EXPOSE 3000
WORKDIR /elasticsearch-demo/dist/src
CMD [ "node", "index.js" ]