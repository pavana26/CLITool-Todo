A CLI tool built using TypeScript and Node.
This tool displays first 20 even numbered todo tasks which are fetched from https://jsonplaceholder.typicode.com/todos/

Task title, and Completed status are displayed on command line.

This command can be executed in following ways:
1. Using terminal from tools such as Visual Studio Code
 a) Set up the project by cloning git repo and all dependencied installed.
 b) Run from the root folder following commands:
  >>  npm run build
  >>  npm i -g
   >> todos-cli list

    Should be able to see first 20 even todos with their title and completed yes or no

2. Using Docker by building and running docker image.
   a) docker compose -f docker-compose.dev.yml build
      This builds image  : clitool-todo (or whatever is your base folder name)
      This can be checked by running - docker images

   b) docker run -it clitool-todo list  

   This lists top 20 even todos.

   Unit tests can be run by using the command >> npm test 

3) Tool in the form of executable file is available in this repo under tool folder.
   Either copy this file to any folder of your choice or go to tool folder.
   Open it using command prompt and run todos-cli list.
