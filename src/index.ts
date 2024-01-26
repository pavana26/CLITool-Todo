#!/usr/bin/env node

import { Command } from 'commander';
import commands from './commands/commands';


const program = new Command();

program.name('cli').description('TypeScript CLI').version('0.0.0');

commands.forEach((cmd) => {
    program.addCommand(cmd);
});

program.parse();

if (!process.argv.slice(2).length) {
    program.outputHelp();
}

