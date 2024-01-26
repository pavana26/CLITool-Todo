"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const list_1 = require("../actions/list");
const commands = [];
/**
 * This  command will list first 20 even
 * numbered tasks.It can take num argument which will
 * list first 'num' even numbered tasks.This is written for extension
 * purpose only
 */
const listCommand = new commander_1.Command()
    .command('list')
    .description('List first 20 even numbered TODO tasks by default,otherwise whatever number passed')
    .argument('[num]', 'numbers to list', 20)
    .action((num) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, list_1.fetchFirst20EvenTodos)(num);
}));
commands.push(listCommand);
//can add more commands here
exports.default = commands;
//# sourceMappingURL=commands.js.map