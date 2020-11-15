import NodeMultithreading from "node-multithreading";
import { App } from "router-ex";

App.isClusterEnabled = false;

NodeMultithreading(async ()=>{
    const { httpServer } = await import('bootstrap/App');
    return httpServer.server;
}, {
    isClusterActive: App.isClusterEnabled
})