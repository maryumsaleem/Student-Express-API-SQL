const { getStudents, getStudent, createStudent,updateStudent,deleteStudent } = require("../database");

module.exports = {
  /*** Get Student  from Database ***/

  get_students: async (req, res) => {
    try {
      const students = await getStudents(req.query);
      res.status(200).json({
        status: "success",
        results: students.length,
        data: students,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: err.message });
    }
  },

  get_student: async (req, res) => {
    try {
      const id = req.params.id;
      const student = await getStudent(id);
      res.status(200).json({
        status: "success",
        data: {
          student,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: err.message });
    }
  },
  add_student: async (req, res) => {
    try {
      const { idstudents, name, email, rollno } = req.body;
      const student = await createStudent(idstudents, name, email, rollno);
      res.status(201).json({ status: "success", data: { student } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: err.message });
    }
  },
  
  edit_student: async (req,res)=>{
    try{
        const id = req.params.id;
        const { name, email, rollno } = req.body;
        const updatedFields = { name, email, rollno };
        const student = await updateStudent(id, updatedFields);
        res.status(200).json({ status: "success", data: { student } });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ status: "error", message: err.message });
      }
  },
   /*** Delete Student from Database ***/
   remove_student: async (req, res) => {
    try {
      const id = req.params.id;
      await deleteStudent(id);
      res.status(200).json({ status: "success", message: "Student deleted successfully." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: err.message });
    }
  },
};
