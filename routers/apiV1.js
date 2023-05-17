// routers/apiV1.js
const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItem");
const { menuItemValidationRules, validate } = require("../validations/menuItemValidation");

router.get("/", async (req, res, next) => {
  try {
    res.json(await MenuItem.find({}));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: "Item not found" });
    res.status(204).end();
  } catch (error) {
      next(error);
  }
});

router.put("/:id", menuItemValidationRules(), validate, async (req, res, next) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: "Item not found" });
    res.json(updatedItem);
  } catch (error) {
    next(error);
  }
});

router.post("/", menuItemValidationRules(), validate, async (req, res, next) => {
  try {
    const newItem = await MenuItem.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req,res, next) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;