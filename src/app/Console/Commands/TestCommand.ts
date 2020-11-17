import { Command } from "router-ex";

export default class TestCommand extends Command {
    protected signature = 'teste';

    public handle() {
        console.log('my first command')
    }
}