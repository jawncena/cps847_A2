# Base image
FROM node:alpine
WORKDIR '/app'
COPY package.json .
# Install dependencies in package.json
RUN npm install

COPY . . 
# Expose port 3000 within the container so that when we go to port 3000 we can see the server
EXPOSE 3000  
# Startup command
CMD ["node", "index.js"]

# After building the image run, the following to start up the container with 
# port mapping from host machine to computer
# docker run -p 3000:3000 <image_id>
# Use docker image ls to see what your image id is