# To-Do List Project

This project is a full stack application in the form of a to-do list. It uses a mySQL server to store the individual items in the to-do list. The application uses Node.js and Express.js for the backend, and React.js on the front end. 

## Packages
-------

The needed packages for this application can be downloaded using `npm install`. 
```
npm install express
npm install mysql2
npm install body-parser
npm install cors
npm install nodemon
```

## Running the application
----
To run the application, type 

`npm run start:dev`.

This should start the node server.

**NOTE** \
The .dev.env is needed for `npm run start:dev` and also the db_broker.js file in order to work properly

In order to start the React.js server, type 

```
cd client
npm run start
```
into a seperate terminal window. The React.js application should load in your browser. 