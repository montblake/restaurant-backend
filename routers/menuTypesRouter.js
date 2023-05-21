const express = require("express");
const router = express.Router();
const MenuType = require("../models/menuType");

router.get("/", async (req, res, next) => {
  try {
    res.json(await MenuType.find({}));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedMenuType = await MenuType.findByIdAndDelete(req.params.id);
    if (!deletedMenuType) return res.status(404).json({ error: "MenuType not found" });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.put("/:id", menuTypeValidationRules(), validate, async (req, res, next) => {
  try {
    const updatedMenuType = await MenuType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMenuType) return res.status(404).json({ error: "MenuType not found" });
    res.json(updatedMenuType);
  } catch (error) {
    next(error);
  }
});

router.post("/", menuTypeValidationRules(), validate, async (req, res, next) => {
  try {
    const newMenuType = await MenuType.create(req.body);
    res.status(201).json(newMenuType);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const
