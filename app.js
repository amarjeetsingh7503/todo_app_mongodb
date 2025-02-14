const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

const app = express();

mongoose.connect("mongodb://localhost:27017/todo_list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(port, () => console.log(`Server running at port ${port}`));
