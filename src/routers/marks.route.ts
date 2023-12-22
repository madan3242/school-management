import { Router } from "express";
import { createMarks, viewMarks } from "../controllers/marks.controller";

const router = Router();

router.route('/add').post(createMarks);
router.route('/').get(viewMarks);

export default router;