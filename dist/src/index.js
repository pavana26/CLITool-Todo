#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const commands_1 = __importDefault(require("./commands/commands"));
const program = new commander_1.Command();
program.name('cli').description('TypeScript CLI').version('0.0.0');
commands_1.default.forEach((cmd) => {
    program.addCommand(cmd);
});
program.parse();
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map