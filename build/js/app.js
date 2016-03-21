var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.description = description;
            this.priority = priority;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
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
/// <reference path="to-do-classes-interfaces.ts"/>
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo = assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
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
tasks.push(new ToDoList.WorkTask(nextDay, "Clean house.", "Low", people.Haley));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean room.", "Low", people.Haley));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean floor.", "Low", people.Haley));
console.log(tasks);
var HaleyTasks = ToDoList.describeTasksForPerson(people.Haley, tasks);
console.log("here are haley's tasks for the day: ");
for (var _i = 0, HaleyTasks_1 = HaleyTasks; _i < HaleyTasks_1.length; _i++) {
    var task = HaleyTasks_1[_i];
    console.log(HaleyTasks);
}
