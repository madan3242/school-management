import { Student } from "../models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler"
import { Request, Response, NextFunction } from "express"

export const createStudent = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {        
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        return next(new ApiError(404, "Please enter all the required fields!")) ;
    }

    const response = await Student.createStudentRecord(req.body);

    // console.log(response);

    return res.status(201).json(
        new ApiResponse(
          200,
        //   response,
          "Student record created!"
        )
    )
})

export const readAllStudents = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const data = await Student.readAllRecords();

    return res.status(200).json(
        new ApiResponse(
            200,
            data,
            "Students records"
        )
    )
})

export const readStudentRecord = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const data = await Student.readOneRecord(req.params.rollno);

    if (!data) {
        return next(new ApiError(404, "No records found"));
    }

    data.stud_id = undefined;
    
    return res.status(200).json(
        new ApiResponse(
            200,
            data,
            "Student record"
        )
    )
})

export const updateStudent = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        return next(new ApiError(404, "Please enter all the required fields!")) ;
    }

    const response = await Student.updateOneRecord(req.params.rollno, req.body);

    return res.status(201).json(
        new ApiResponse(
          200,
        //   response,
          "Student record updated!"
        )
    )
})

export const deleteStudent = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {    
    const data = await Student.deleteOneRecord(req.params.rollno);

    console.log(data);
    
    return res.status(201).json(
        new ApiResponse(
          200,
        //   response,
          "Student record deleted!"
        )
    )
})