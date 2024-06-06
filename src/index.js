const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./router/user");
const itemsRouter = require("./router/item");

// middleware
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.use("/api", itemsRouter);

// ROUTES
app.get("/api/items", (req, res) => {
  // res.send("Hello World");
  res.json(items);
});

// CONNECT TO DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("estoy conectado a la base de datos"))
  .catch((error) => console.error(error));
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
