Mongodb
=======

http://www.tutorialspoint.com/mongodb/mongodb_overview.htm

It's a simple express app that provides RESTful API and persist to mongodb.

## Installation

### Mongo Installation
1. Go to http://www.mongodb.org/.
2. Download the appropriate version and copy to local folder.
3. Add the bin directory to your path.
4. `mongod --dbpath mongo/data/` start mongodb and set path
5. (Optional) You can access the database directly with the command `mongo`.

### App Installation
1. Then run the command `npm install` within the installation folder.

### Running
#### In Development
1. Run the server with `node app.js`
2. The application will be available on http://localhost:3000/

### Note
Need following code for POST, PUT and DELETE to work
```
app.use(bodyParser());
```
