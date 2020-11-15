import { HttpApp, WsApp } from "router-ex";
import RealTimeController from "./Controllers/RealTimeController";
import TestMiddleware from "./Middlewares/TesteMiddleware";

export default class WsServer extends WsApp {
    protected middleware = [
        TestMiddleware
    ];

    protected controller = RealTimeController;
}