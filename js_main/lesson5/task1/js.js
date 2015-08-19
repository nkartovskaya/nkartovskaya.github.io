/**
 Напиште код который выведет сотрудника который выполнил больше всех задач.

 Например:

 var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
 */

//----------------VER1-----------------
//creating object
var taskCompleted = {
    //object's properties
    "Anna": 29,
    "Serg": 35,
    "Elena": 1,
    "Anton": 99
}

//function for searching employee with maximim task completed
function bestEmployee(taskCompleted) {
    //defining variable maxTask and assigning value as first item of object
    var maxTask = taskCompleted[1];
    //loop for checking object's properties
    for (var item in taskCompleted) {
        //searching item with maximum task completed
        if (taskCompleted[item] > maxTask) {
            //assigning value maxTask if nex item bigger then maxItem
            maxTask = taskCompleted[item];
        }
    }
    //returning item with maximum task completed
    return item;
}
//calling function and display data
console.log("Ver1.The best employee is " + bestEmployee(taskCompleted));

//----------------VER2-----------------

var taskCompleted = {
    //object's properties
    "Anna": 29,
    "Serg": 35,
    "Elena": 1,
    "Anton": 99
}
//defining variable maxTask and assigning value as first item of object
var maxTask = taskCompleted[1];
//loop for checking object's properties
for (var item in taskCompleted) {
    //searching item with maximum task completed
    if (taskCompleted[item] > maxTask) {
        //assigning value maxTask if nex item bigger then maxItem
        maxTask = taskCompleted[item];
    }
}
//calling function and display data
console.log("Ver2.The best employee is " + item);


