import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Marks } from "../models/marks.model";
import { ApiResponse } from "../utils/ApiResponse";

export const createMarks = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { marks, sub_id, stud_rollno } = req.body;

    const response = await Marks.createMarksRecords(marks, sub_id, stud_rollno);

    return res.status(201).json(
      new ApiResponse(
        200,
        //   response,
        "Marks record created!"
      )
    );
});