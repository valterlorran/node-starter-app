import { App } from "router-ex";
import HttpServer from "app/Http/HttpServer";

import ConsoleServer from "app/Console/ConsoleServer";

export const app = new App();

app.register(
    new HttpServer
);

app.register(
    new ConsoleServer
);

(async ()=>{
    app.registerProviders((await import('configs/providers')).default)

    app.start();
})();