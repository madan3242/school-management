import express, { Application, NextFunction, ErrorRequestHandler, Response, Request } from "express"
import bodyParser from "body-parser";
import morgan from "morgan";
// import { ApiError } from "./utils/ApiError";
// import { asyncHandler } from "./utils/asyncHandler";
import { ApiResponse } from "./utils/ApiResponse";
import cors from "cors";

import authRouter from "./routers/auth.route";
import studentRouter from "./routers/students.route"
import teacherRouter from "./routers/teachers.route"
import marksRouter from "./routers/marks.route";
import subjectsRouter from "./routers/subjects.route";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan('common'));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/teachers', teacherRouter);
app.use('/api/v1/marks', marksRouter);
app.use('/api/v1/subjects', subjectsRouter);

app.get("/", (req: Request, res: Response) => {
    return res.status(201).json(
      new ApiResponse(
        200,
        "Tested Ok"
      )
    )
})

export type Errors = {
    message?: string,
    statusCode?: number
}

app.use((err: Errors, req: Request, res: Response, next: NextFunction) => {
    let error: Errors = { ...err };
    error.statusCode = err.statusCode || 500;
    error.message = err.message || "Internal Server Error";

    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Internal Server Error",
    });    
})

export default app;