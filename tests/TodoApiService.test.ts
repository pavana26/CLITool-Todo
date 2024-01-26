import { getTodos } from "../src/service/TodoApiService";

describe('Should fetch first 40 todos ', ()=>{
    test('fetch todos',async ()=>{
        const apiData = await getTodos();
        let length = apiData.length;
        expect(length).toBe(40);
    })
})