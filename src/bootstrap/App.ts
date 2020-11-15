import { App } from "router-ex";
import HttpServer from "app/Http/HttpServer";

import ConsoleServer from "app/Console/ConsoleServer";
import WsServer from "app/Http/WsServer";

export const app = new App();

export const httpServer = new HttpServer(app);

app.register(httpServer);

app.register(
    new ConsoleServer(app)
);

app.register(
    new WsServer(app)
);

(async ()=>{
    app.registerProviders((await import('configs/providers')).default)

    app.start();
})();