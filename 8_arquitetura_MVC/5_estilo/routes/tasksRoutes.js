const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/Taskcontroller");
const Task = require("../models/Task");

router.get("/add", TaskController.createTask);
router.get("/", TaskController.showTasks);

module.exports = router;
