// Loading the express module on our server
const express = require("express");

// Creates a new instance of express on our server
const app = express();

// tells the server where to listen for requests, allows input or default 2000
const port = process.env.PORT || 2000;

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
const skillsRouter = require("./routes/skills");

app.use("/", indexRouter);
app.use("/", skillsRouter);
// app.use("public/css", express.static(__dirname + "public/css"));

app.listen(port, function () {
  // tells the server where to listen for requests on port 2000
  console.log(`hello-express is listening on port ${port}`);
});

app.get("/", function (req, res) {
  res.send("Hello World");
  // when a request comes in at localhost:2000, it will respond
});

// app.get( funcion(req, res){

// });
