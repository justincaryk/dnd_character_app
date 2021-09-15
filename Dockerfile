# Pull in the official lightweight version of Node 12.
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /

COPY package.json .
# COPY yarn.lock .

# Install production dependencies.
RUN yarn cache clean 

RUN yarn install --production

# Copy local codebase into the container image
COPY . .

CMD [ "cd", "engine"]
CMD [ "yarn", "migrate:latest"]

# Start the api server

CMD [ "yarn", "start" ]