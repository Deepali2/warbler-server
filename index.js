require("dotenv").config();
const express        = require ('express'),
      cors           = require ('cors'),
      bodyParser     = require('body-parser'),
      app            = express(),
      PORT           = 8081,
      errorHandler   = require("./handlers/errors"),
      authRoutes     = require('./routes/auth'),
      messagesRoutes = require('./routes/messages');
     
app.use(cors());
app.use(bodyParser.json()); //since we are building an API we do not use urlencoded

//if there is any request that starts with /api/auth  go and use the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", messagesRoutes);

//all my routes here
app.use((req, res, next) => {
  let err = new Error("NOT FOUND"); //Error is a built in constructor function in javascript
  err.status = 404; 
  next(err);
})//next is a handler. It allows us to move to the next piece of middleware. next will help us to bubble up the errors

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The express server is listening on port ${PORT}`);
})
