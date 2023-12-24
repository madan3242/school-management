import express from "express";
import { viewAllSubjects } from "../controllers/subject.controller";

const router = express.Router();

router.route("/").get(viewAllSubjects);

export default router;
