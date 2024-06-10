# sitemate-challenge

This project is powered by MERN (MongoDB, Express, React, Node) with Vite on the client side, Typescript and TailwindCSS. Pnpm is used for package management instead of npm as it makes the development much faster with the way it handles the package internally.

## Pre-requisite

As it is currently running on mongoDB local server (mongodb://127.0.0.1/test), you will need to have mongodb services running:

### How to install mongodb and run/stop mongodb

Install mongoDB

```
brew install mongodb-community
```

Start server

```
brew services start mongodb-community
```

Only if you are done with the development, command to stop the mongo service

```
brew services stop mongodb-community
```

Check if the service is running

```
brew services list  # check mongodb-community server status to see if it is running
```

## Installation

To get the pnpm running
npm install -g pnpm

To run the client side code

```
  cd client      # change directory to client folder
  pnpm install   # install the package with pnpm
  pnpm dev       # run development
```

Note: client port is set to 3000 on default

To run the server side code

```
  cd server      # change directory to server folder
  pnpm install   # install the package with pnpm
  pnpm dev       # run development
```

Note: client port is set to 3001 on default

## The improvements I will make if I have more time

1. Get testings up with jest on both client and server side to make sure the api calls are doing what they are meant to do.
2. Connect to mongoDB to store data.
3. Update the UI to make it easier to navigate.
