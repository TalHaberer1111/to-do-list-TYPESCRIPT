/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var Haley = {
        name: "Haley B",
        email: "diane@epicodus.com"
    };
    var Tal = {
        name: "Tal H.",
        email: "Tal@epicodus.com"
    };
    ToDoList.people = {
        "Haley": Haley,
        "Tal": Tal
    };
})(ToDoList || (ToDoList = {}));
