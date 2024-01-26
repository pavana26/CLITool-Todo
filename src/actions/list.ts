import { COMPLETED, EMPTY_TODO_TASKLIST, NOT_COMPLETED, NUMBER_OF_EVEN_TODOS } from "../constants/constant";
import { TODOS, getTodos } from "../service/TodoApiService";

export async function fetchFirst20EvenTodos(num?: number) {

    const todos = (await getTodos());

    // Check whether list of todos is empty
    if (todos.length == 0) {
        console.log(EMPTY_TODO_TASKLIST);
        return;
    }
    processResponse(todos);
}

export function processResponse(todos: TODOS[]) {
    let counter = 1;

    /*process the response - display in console -->  Title and task status
    Note that this is not id of the returned response.Just to count 20 rows are there*/

    todos.forEach((todo) => {
        if (isEven(todo.id) && counter <= NUMBER_OF_EVEN_TODOS) {
            console.log('\x1b[33m%s\x1b[0m',(counter++) + '  Title : ' + todo.title + '  , '+ 'Completed : ' + getCompletedStatus(todo.completed));
        }
    });
}

export const isEven = (id: number) => {
    return id % 2 === 0;
}

export const getCompletedStatus = (status: boolean) => {
    if (status)
        return COMPLETED;
    else
        return NOT_COMPLETED;
}