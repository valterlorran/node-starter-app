import { Controller } from "router-ex";

export default class IndexController extends Controller {
    public index() {
        return 'hello world';
    }
}