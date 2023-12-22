import { Request, Response, NextFunction } from "express"

/**
 *
 * @param {(req: import("express").Request, res:import("express").Response, next:import("express").NextFunction) => void} requestHandler
 */

export const asyncHandler = (func: any) => (req: Request, res: Response, next: NextFunction) => {        
    Promise.resolve(func(req, res, next)).catch(next)
}