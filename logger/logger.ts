import { Request, Response, NextFunction } from 'express';

export const logDebugState = (req: Request, res: Response, next: NextFunction) => {
    if(process.env.NODE_ENV === 'production') {
        return next();
    }

    const { params, query } = req;

    let paramText: string = '';
    let queryText: string = '';

    if(Object.keys(params).length) {
        paramText = '\n';
        Object.keys(params).forEach(key => {
            paramText += `\t${key}: ${params[key]}\n`;
        })
    }

    if(Object.keys(query).length) {
        queryText = '\n';
        Object.keys(query).forEach(key => {
            queryText += `\t${key}: ${query[key]}\n`;
        })
    }

    const logText: string = `
        \r[ DEBUG LOG ]
        \rRequest Type: ${req.method.toUpperCase()}
        \rEndpoint: ${req.originalUrl}
        \rParams: ${paramText}
        \rQuery: ${queryText}\n`

    console.log(logText);
    next();
} 

