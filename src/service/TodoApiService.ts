import { TODO_API, TOTAL_NUMBER_OF_TODOS_TO_FETCH } from "../constants/constant";

const axios = require('axios');

export type TODOS = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};
export const getTodos = async (num?: number) => {

  /*This method caters to default fetching of first 40 todos.
  This can be customised based on the num parameter entered by user
  */
  try {
    const response = await axios.get(TODO_API, {
      params: {
        _limit: TOTAL_NUMBER_OF_TODOS_TO_FETCH
      }
    })

    const todos: TODOS[] = response.data;
    return todos;

  } catch (error) {
    console.log("Error occured:" + error);
    throw error;
  }
};