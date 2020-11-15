import { App } from "router-ex";
import HttpServer from "app/Http/HttpServer";

import ConsoleServer from "app/Console/ConsoleServer";

export const app = new App();

export const httpServer = new HttpServer;

app.register(httpServer);

app.register(
    new ConsoleServer
);

(async ()=>{
    app.registerProviders((await import('configs/providers')).default)

    app.start();
})();