"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const list_1 = require("../src/actions/list");
const todos = [
    {
        id: 1,
        userId: 1,
        title: "first title",
        completed: false
    }, {
        id: 2,
        userId: 1,
        title: "second title",
        completed: false
    },
    {
        id: 3,
        userId: 1,
        title: "third title",
        completed: false
    },
    {
        id: 4,
        userId: 1,
        title: "fourth title",
        completed: true
    }
];
test('process todos', () => {
    const spy = jest.spyOn(global.console, 'log');
    (0, list_1.processResponse)(todos);
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
});
test('check number is even', () => {
    const actual = (0, list_1.isEven)(34);
    expect(actual).toBe(true);
});
test('Task status read correctly', () => {
    const actual = (0, list_1.getCompletedStatus)(false);
    expect(actual).toBe("NO");
});
console.log("no of coma::" + commander_1.program.commands.length);
//# sourceMappingURL=list.test.js.map