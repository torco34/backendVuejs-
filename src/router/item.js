const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// Crear un nuevo ítem

router.post("/items", (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// obtener item
router.get("/items", (req, res) => {
  Item.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener id item
router.get("/items/:id", (req, res) => {
  const { id } = req.params;
  Item.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// endpoint update items
router.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, imageUrl } = req.body;
  Item.updateOne(
    { _id: id },
    { $set: { name, description, price, category, imageUrl } }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// delete items
router.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  Item.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
