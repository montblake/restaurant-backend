const express = require("express");
const router = express.Router();
const Course = require("../models/course");

router.get("/", async (req, res, next) => {
  try {
    res.json(await Course.find({}));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) return res.status(404).json({ error: "Course not found" });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.put("/:id", courseValidationRules(), validate, async (req, res, next) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCourse) return res.status(404).json({ error: "Course not found" });
    res.json(updatedCourse);
  } catch (error) {
    next(error);
  }
});

router.post("/", courseValidationRules(), validate, async (req, res, next) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
