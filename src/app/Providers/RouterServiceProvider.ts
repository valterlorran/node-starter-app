import { RouterServiceProvider as ServiceProvider } from "router-ex";

export class RouterServiceProvider extends ServiceProvider {

    protected map() {
        this.mapApiRoutes();
        this.mapWebRoutes();
    }

    protected async mapWebRoutes() {
        await this.addRoute('routes/Web');
    }

    protected async mapApiRoutes() {
        await this.addRoute('routes/Api');
    }

    protected async addRoute(file: string) {
        const callback:Function = await import(file);
    }
}