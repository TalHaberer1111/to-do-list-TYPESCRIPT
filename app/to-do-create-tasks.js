/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy Chocolate.", "Low"));
tasks.push(new ToDoList.HomeTask("Laundry.", "High", people.Tal));
tasks.push(new ToDoList.HobbyTask("Practice yoga"));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.Haley));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.Tal));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.Haley));
console.log(tasks);
