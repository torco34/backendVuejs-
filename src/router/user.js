const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

// create user

router.post("/users", (req, res) => {
  const user = userSchema(req.body);

  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener usuarios

router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// obtener user por id
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// endpoint update user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { username, email, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// endpoint delete user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
