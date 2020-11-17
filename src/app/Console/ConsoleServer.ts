import { ConsoleApp } from "router-ex";

export default class ConsoleServer extends ConsoleApp {
    protected registerCommands() {
        this.load(__dirname + '/Commands');
    }
}