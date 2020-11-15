import { HttpApp } from "router-ex";
import TestMiddleware from "./Middlewares/TesteMiddleware";

export default class HttpServer extends HttpApp {
    protected middleware = [
        TestMiddleware
    ];

    protected middlewareGroups = {
        'web': [],
        'api': []
    }

    protected routeMiddleware = {

    }
}