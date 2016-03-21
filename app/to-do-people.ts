/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {

  var Haley: ToDoList.IPerson = {
  name: "Haley B",
  email: "diane@epicodus.com"
  }

  var Tal: ToDoList.IPerson = {
    name: "Tal H.",
    email: "Tal@epicodus.com"
  }

  export var people = {
    "Haley": Haley,
    "Tal": Tal
  };
}
