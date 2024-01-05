import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { Marks } from "../models/marks.model";
import { ApiResponse } from "../utils/ApiResponse";

type Marks = {

}

export const createMarks = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { marks, stud_rollno } = req.body;

    if (typeof marks === "object") {
      marks.map(async (mark: any) => {
        return await Marks.createMarksRecords(mark.marks, mark.sub_id, stud_rollno);
      })

      return res.status(201).json(
        new ApiResponse(
          200,
          // result,
          "Marks record created!"
        )
      );
    }

});

// export const createMarks = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
//     const { marks, sub_id, stud_rollno } = req.body;

//     const response = await Marks.createMarksRecords(marks, sub_id, stud_rollno);

//     return res.status(201).json(
//       new ApiResponse(
//         200,
//           response,
//         "Marks record created!"
//       )
//     );
// });

export const viewMarks = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { stud_rollno } = req.body;

    const response = await Marks.getMarksRecordsById(stud_rollno);

    return res.status(201).json(
      new ApiResponse(
        200,
          response.rows,
        `Marks record od student : ${stud_rollno}`
      )
    );
});

