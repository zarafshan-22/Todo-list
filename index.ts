#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true
while(condition){
let Add = await inquirer.prompt([{
    
    name:"todo",
    type:"input",
    message:"Add a car in your list",
},
{name:"addMore",
type:"confirm",
message:"Do you want to add another car in your list?",
default:"false",
},
]);
todo.push(Add.todo);
condition=Add.addMore;
console.log(todo)
}