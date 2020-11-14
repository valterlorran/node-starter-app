import { RouterServiceProvider as ServiceProvider } from "router-ex";
import Router from "router-ex/dist/libs/Router";

export class RouterServiceProvider extends ServiceProvider {

    protected map() {
        this.mapApiRoutes();
        this.mapWebRoutes();
    }

    protected async mapWebRoutes() {
        await this.addRoute('routes/Web', 'web');
    }

    protected async mapApiRoutes() {
        await this.addRoute('routes/Api', 'api');
    }

    protected async addRoute(file: string, group: string) {
        const callback:Function = (await import(file)).default;
        Router.group(callback, group)
    }
}