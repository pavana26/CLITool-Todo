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
exports.getTodos = void 0;
const constant_1 = require("../constants/constant");
const axios = require('axios');
const getTodos = (num) => __awaiter(void 0, void 0, void 0, function* () {
    /*This method caters to default fetching of first 40 todos.
    This can be customised based on the num parameter entered by user
    */
    try {
        const response = yield axios.get(constant_1.TODO_API, {
            params: {
                _limit: constant_1.TOTAL_NUMBER_OF_TODOS_TO_FETCH
            }
        });
        const todos = response.data;
        return todos;
    }
    catch (error) {
        console.log("Error occured:" + error);
        throw error;
    }
});
exports.getTodos = getTodos;
//# sourceMappingURL=TodoApiService.js.map