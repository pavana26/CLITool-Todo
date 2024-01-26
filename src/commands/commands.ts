import { Command } from 'commander';

import { getTodos } from '../service/TodoApiService';
import { fetchFirst20EvenTodos, processResponse } from '../actions/list';

const commands: Command[] = [];

/**
 * This  command will list first 20 even
 * numbered tasks.It can take num argument which will
 * list first 'num' even numbered tasks.This is written for extension
 * purpose only 
 */
const listCommand = new Command()
    .command('list')
    .description('List first 20 even numbered TODO tasks by default,otherwise whatever number passed')
    .argument('[num]', 'numbers to list', 20)
    .action(async (num: number) => {
       await fetchFirst20EvenTodos(num);
    });
commands.push(listCommand);

//can add more commands here

export default commands;