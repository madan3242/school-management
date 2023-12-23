import { Router } from "express";
import { 
    createTeacher, 
    deleteTeacher, 
    readAllTeachers, 
    readTeacher, 
    updateTeacher 
} from "../controllers/teachers.controller";

const router = Router();

router.route('/create').post(createTeacher);

router.route('/').get(readAllTeachers);

router.route('/:regno')
        .get(readTeacher)
        .put(updateTeacher)
        .delete(deleteTeacher)

export default router;