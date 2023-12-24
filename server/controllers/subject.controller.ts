import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { subjects } from "../models/subject.model";
import { ApiResponse } from "../utils/ApiResponse";

export const createSubjects = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { sub_id, sub_name } = req.body;
    const { teach_regno } = req.params;

    await subjects.createSubjectRecords(sub_id, sub_name, teach_regno);

    return res.status(201).json(
      new ApiResponse(
        200,
        //   response,
        "Subject record created!"
      )
    );
});

export const viewAllSubjects = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const response = await subjects.viewSubjects();
  return res.status(201).json(
    new ApiResponse(
      200,
      response,
      "Subjects!"
    )
  );
})
