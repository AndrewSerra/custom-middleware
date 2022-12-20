import { Request, Response, NextFunction } from 'express';

export const assignHeaders = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*"); // Insert project domain
    res.setHeader('Accept', 'application/json');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
}

