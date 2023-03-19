const express = require("express");

const router = express.Router();

const CreateTask = require("../controllers/create_task");
const deleteTask= require('../controllers/delete_task');

router.post("/addTask", CreateTask.addTask);
router.get('/delete', deleteTask.delete);


module.exports = router;
