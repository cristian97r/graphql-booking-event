const express = require("express");
const mongoose = require("mongoose");

//MongoDB config
mongoose.connect("mongodb://localhost:27017/graphql-practice", {
  useNewUrlParser: true
});

//Express config
const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

//Server config
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log("Server is running in port " + PORT);
});
