import { HttpApp } from "router-ex";

export default class HttpServer extends HttpApp {
    protected middleware = [];

    protected middlewareGroups = {
        'web': [],
        'api': []
    }

    protected routeMiddleware = {
        
    }
}