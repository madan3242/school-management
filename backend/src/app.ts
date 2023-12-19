import express, { Application, NextFunction, ErrorRequestHandler, Response, Request } from "express"
import bodyParser from "body-parser";
import studentRouter from "./routers/students.routers"
import teacherRouter from "./routers/teachers.routers"
import marksRouter from "./routers/marks.routers";
import morgan from "morgan";
// import { ApiError } from "./utils/ApiError";
// import { asyncHandler } from "./utils/asyncHandler";
import { ApiResponse } from "./utils/ApiResponse";
import cors from "cors";
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan('combined'))

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/teachers', teacherRouter);
app.use('/api/v1/marks', marksRouter);

app.get("/api/v1/", (req: Request, res: Response) => {
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