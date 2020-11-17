import { ConsoleApp } from "router-ex";

export default class ConsoleServer extends ConsoleApp {
    protected registerCommands = [
        __dirname + '/Commands'
    ];

    // constructor() {
        
    // }
}