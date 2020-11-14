import { HttpApp } from "router-ex";
import TestMiddleware from "./Middlewares/TesteMiddleware";

export default class HttpServer extends HttpApp {
    protected middleware = [];

    protected middlewareGroups = {
        'web': [
            TestMiddleware
        ],
        'api': []
    }

    protected routeMiddleware = {

    }
}