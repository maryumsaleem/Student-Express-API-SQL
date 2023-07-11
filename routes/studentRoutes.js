const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router
  .route("/student")
  .get(studentController.get_students).post(studentController.add_student);

  router
  .route("/student/:id")
  .get(studentController.get_student).patch(studentController.edit_student).delete(studentController.remove_student);

  module.exports = router;