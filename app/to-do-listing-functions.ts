/// <reference path="to-do-classes-interfaces.ts"/>

module ToDoList {
  // export var getTask = function(taskCollection: Task[]): String[] {
  //   var home: String[] = [];
  //   var work: String[] = [];
  //   var hobby: String[] = [];
  //   var descriptions: String[] = [home, work, hobby];
  //   for(var task of taskCollection) {
  //     if(task.constructor.name === 'HomeTask'){
  //       home.push(task.description);
  //     } else if(task.constructor.name === 'HobbyTask'){
  //       hobby.push(task.description);
  //     } else(task.constructor.work === 'WorkTask'){
  //       work.push(task.description);
  //     }
  //   }
  //   return descriptions;
  // }

  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String [] = []
    for (var task of taskCollection){
      if(task.assignedTo = assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
   }

   export var grabTasksOfType = function(type: string) {
       var arr = [];
       for (var task of tasks) {
         if (task.constructor.name === type) {
           arr.push(task);
         }
       }
       return arr;
     }

}

$(document).ready(function() {
  $("#task").submit(function(event){
  event.preventDefault();
  var selected = $("select.task-type").val();
  tasks.forEach(function(i){
    if (i.constructor.name === selected){
      $(".result").append("<li>" + i.constructor.name + "</ul><ul><li>" + i.description + "<ul><li> Priority: " + i.priority "</li></ul></li>")
      }
    });
  $("#priority").submit(function(event){
    event.preventDefault();
    var selectedall = $("select.task-priority").val();
    tasks.forEach(function(i){
      if (i.constructor.priority === selected){
        $(".result").append("<li>" + i.constructor.name + "</ul><ul><li>" + i.description + "<ul><li> Priority: " + i.priority "</li></ul></li>")
      }
    })
  });
  });
});
