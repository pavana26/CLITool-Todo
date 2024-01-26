import { program } from "commander";
import { isEven , getCompletedStatus,  processResponse} from "../src/actions/list";

const todos = [
    {
        id:1,
        userId:1,
        title:"first title",
        completed:false
    }, {
        id:2,
        userId:1,
        title:"second title",
        completed:false
    },
    {
        id:3,
        userId:1,
        title:"third title",
        completed:false
    },
    {
        id:4,
        userId:1,
        title:"fourth title",
        completed:true
    }
];


test('process todos',()=>{
    const spy = jest.spyOn(global.console, 'log');
    processResponse(todos);
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
})



test('check number is even',()=>{
    const actual = isEven(34);
    expect(actual).toBe(true);
})


test('Task status read correctly',()=>{
    const actual = getCompletedStatus(false);
    expect(actual).toBe("NO");
})


console.log("no of coma::"+program.commands.length);