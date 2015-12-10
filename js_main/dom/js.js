(function (window) {
    document.addEventListener("DOMContentLoaded", function () {

        var saveData = JSON.parse(localStorage.getItem("todoList")) || {
                "unselected": [],
                "selected": []
            };
        var button = document.querySelector(".add-task");
        var todoList = document.querySelector(".todos");
        var newTodoInput = document.querySelector(".new-task");
        var todoListChecked = document.querySelector(".todos_checked");
        localStorage.setItem("todoList", "TEST");
        console.log(saveData);

        newTodoInput.onkeypress = function (event) {
            if (event.keyCode == 13) {
                addNewTask();
            }
        }
        var addNewTask = function (text, isChecked) {
            var newTodo = document.createElement("li");
            var todoCheckbox = document.createElement("input");
            var todoText = document.createElement("span");
            var todoDelete = document.createElement("button");

            if (typeof text=="string") {
                var newTodoText = text;
                var isNew = false;
            } else {
                var newTodoText = newTodoInput.value.trim();
                var isNew = true;
            }
            if (newTodoText) {
                newTodo.className = "todo";
                todoCheckbox.type = "checkbox";
                todoCheckbox.className = "todo__check";
                todoCheckbox.onclick = function () {

                    var moveString = this.nextSibling.textContent;

                    if (this.checked) {
                        saveData.unselected.splice(saveData.unselected.indexOf(moveString), 1);
                        saveData.selected.push(moveString);
                        todoListChecked.appendChild(this.parentNode);

                    } else {
                        saveData.selected.splice(saveData.selected.indexOf(moveString), 1);
                        saveData.unselected.push(moveString);
                        todoList.appendChild(this.parentNode);

                    }
                    localStorage.setItem("todoList", JSON.stringify(saveData));
                };

                if (isNew && isChecked) {
                    todoCheckbox.checked = true;
                }

                todoText.innerHTML = newTodoText;
                todoText.className = "todo__text";

                todoDelete.innerHTML = "Delete";
                todoDelete.className = "todo__delete";
                todoDelete.onclick = function () {
                    var delString = this.previousSibling.textContent;
                    if (this.parentNode.querySelector(".todoList")) {
                        saveData.selected.splice(saveData.selected.indexOf(delString), 1);
                    } else {
                        saveData.unselected.splice(saveData.unselected.indexOf(delString), 1);
                    }
                    this.parentNode.outerHTML = "";
                };

                newTodo.appendChild(todoCheckbox);
                newTodo.appendChild(todoText);
                newTodo.appendChild(todoDelete);
                if (isNew) {
                    todoList.appendChild(newTodo);
                    saveData.unselected.push(newTodoText);
                } else {
                    if (!isChecked) {
                        todoList.appendChild(newTodo);
                    } else {
                        todoListChecked.appendChild(newTodo);
                    }
                }
                localStorage.setItem("todoList", JSON.stringify(saveData));

                newTodoInput.value = "";
            }
        };
        button.onclick = addNewTask;

        saveData.unselected.forEach(function(item) {
            addNewTask(item, false);
        });
        saveData.selected.forEach(function(item) {
            addNewTask(item,true);
        });
    });
})(window);


