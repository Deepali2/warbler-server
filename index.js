const express    = require ('express'),
      cors       = require ('cors'),
      bodyParser = require('body-parser'),
      app        = express(),
      PORT       = 8081;  
     
app.use(cors());
app.use(bodyParser.json()); //since we are building an API we do not use urlencoded

//all my routes here

app.use((req, res, next) => {
  let err = new Error("NOT FOUND"); //Error is a built in constructor function in javascript
  err.status = 404; 
  next(err);
})//next is a handler. It allows us to move to the next piece of middleware. next will help us to bubble up the errors

// app.use((req, res) => {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })
// app.get('/', (req, res) => {
//   res.send('Hello from the express server')
// })

app.listen(PORT, () => {
  console.log(`The express server is listening on port ${PORT}`);
})
