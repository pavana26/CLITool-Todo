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
exports.getCompletedStatus = exports.isEven = exports.processResponse = exports.fetchFirst20EvenTodos = void 0;
const constant_1 = require("../constants/constant");
const TodoApiService_1 = require("../service/TodoApiService");
function fetchFirst20EvenTodos(num) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = (yield (0, TodoApiService_1.getTodos)());
        // Check whether list of todos is empty
        if (todos.length == 0) {
            console.log(constant_1.EMPTY_TODO_TASKLIST);
            return;
        }
        processResponse(todos);
    });
}
exports.fetchFirst20EvenTodos = fetchFirst20EvenTodos;
function processResponse(todos) {
    let counter = 1;
    /*process the response - display in console -->  Title and task status
    Note that this is not id of the returned response.Just to count 20 rows are there*/
    todos.forEach((todo) => {
        if ((0, exports.isEven)(todo.id) && counter <= constant_1.NUMBER_OF_EVEN_TODOS) {
            console.log('\x1b[33m%s\x1b[0m', (counter++) + '  Title : ' + todo.title + '  , ' + 'Completed : ' + (0, exports.getCompletedStatus)(todo.completed));
        }
    });
}
exports.processResponse = processResponse;
const isEven = (id) => {
    return id % 2 === 0;
};
exports.isEven = isEven;
const getCompletedStatus = (status) => {
    if (status)
        return constant_1.COMPLETED;
    else
        return constant_1.NOT_COMPLETED;
};
exports.getCompletedStatus = getCompletedStatus;
//# sourceMappingURL=list.js.map