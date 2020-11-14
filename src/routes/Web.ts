import Router from "router-ex/dist/libs/Router";
import IndexController from "app/Http/Controllers/IndexController";

export default (router: Router) => {
    router.get('/index', [IndexController, 'index'])
}