import { Request, Response, NextFunction } from "express";

export const IsLoggedMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session.client) {
    return next();
  } else {
    return res.json({ error: "login required!" });
  }
};
