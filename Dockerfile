# pull official base image
FROM node:14.17.3

# set working directory
WORKDIR /app

# add app
COPY . ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install


# start app
CMD ["npm", "start"]