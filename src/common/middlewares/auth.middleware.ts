import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import JWT from "../../shared/JWT";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction) {
    try {
      const token: string = req.headers.authorization.split(" ")[1];

      JWT.verify(token);

      next();
    } catch (err) {
      return res.status(401).json({
        error: err.message,
      });
    }
  }
}
