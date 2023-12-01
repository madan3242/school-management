import { Teacher } from "../models";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler"
import { Request, Response, NextFunction } from "express"

export const createTeacher = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        return next(new ApiError(404, "Please enter all the required fields!")) ;
    }

    const response = await Teacher.createTeacherRecord(req.body);

    console.log(response);

    return res.status(201).json(
        new ApiResponse(
          200,
        //   response,
          "Teacher record created!"
        )
    )
})

export const readAllTeachers = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    const data = await Teacher.readAllRecords();

    return res.status(200).json(
        new ApiResponse(
            200,
            data,
            "Teachers records"
        )
    )
})

export const readTeacher = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    const data = await Teacher.readOneRecord(req.params.regno);

    if (!data) {
        return next(new ApiError(404, "No records found"));
    }
    
    return res.status(200).json(
        new ApiResponse(
            200,
            data,
            "Teacher record"
        )
    )
})

export const updateTeacher = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        return next(new ApiError(404, "Please enter all the required fields!")) ;
    }

    const response = await Teacher.updateOneRecord(req.params.regno, req.body);

    return res.status(201).json(
        new ApiResponse(
          200,
        //   response,
        `Teacher ${req.params.regno} record updated!"`
        )
    )
})

export const deleteTeacher = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
    const data = await Teacher.deleteOneRecord(req.params.regno);

    console.log(data);
    
    return res.status(201).json(
        new ApiResponse(
          200,
        //   response,
        `Teacher ${req.params.regno} record deleted!`
        )
    )
})