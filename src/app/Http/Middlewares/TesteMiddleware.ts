import { IMiddleware, Request, Response, NextFunction } from "router-ex";

export default class TestMiddleware implements IMiddleware{
    handler(request: Request, response: Response, next: NextFunction) {
        console.log('IMiddleware TestMiddleware')
        next();
    }
}