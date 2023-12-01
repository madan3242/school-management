import { Router } from "express";
import { 
    createStudent,
    readAllStudents,
    readStudentRecord,
    updateStudent,
    deleteStudent
} from "../controllers/students.controllers";

const router = Router();

router.route('/create').post(createStudent);

router.route('/').get(readAllStudents);

router.route('/:rollno')
        .get(readStudentRecord)
        .put(updateStudent)
        .delete(deleteStudent)

export default router;