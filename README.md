# mk-service-provider

## Requirements

- Node version: 12.13.0



## Prerequisites

- Install the dependencies

    - Install all the dependencies at once

        ```
        ./install-dependecies.sh
        ```

    - Install dependencies by projects

        - `npm install` at the root of the project
        - `npm install` at the root of the server folder
        - `npm install` at the root of the client folder



## How to run it

### Run separately in development mode

##### Client Part

1. `cd client`
2. `SERVER_HOST="http://localhost:3030" npm start`

##### Server Part

1. `cd server`
2. `npm run server`

### Launch both the client and the server with one script in development mode

`npm run start-dev`

### Run as one web service in production mode

- (Optional) Install dependencies

    `heroku-prebuild` or `./install-dependencies.sh` takes care of npm installs, so it's not necessary if you've already installed all the packages.

    ```
    npm run heroku-prebuild  // or use ./install-dependencies.sh
    ```

- Build

    ```
    npm run heroku-postbuild  // Necessary since it does the build
    ```

- Launch

    ```
    NODE_ENV=production npm start
    ```



## How to run the tests in the server folder

- Run all the tests

    ```
    npm test
    ```

- Run a specific file

    ```
    npm run test:file [FILE_PATH]
    ```
