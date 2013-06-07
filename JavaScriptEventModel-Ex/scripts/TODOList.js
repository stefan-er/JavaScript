//TASK CONDITIONS:
//Create a TODO list with the following UI controls:
//Form input for new Item
//Button for adding the new Item
//Button for deleting some item
//Show and Hide Button

(function () {
    'use strict';

    var addButton = document.getElementById("add-button");
    addButton.addEventListener("click", addItemOnBtnClick, false);

    var deleteButton = document.getElementById("delete-button");
    deleteButton.addEventListener("click", deleteItemOnBtnClick, false);

    var showHideButton = document.getElementById("show-hide-button");
    showHideButton.addEventListener("click", showAndHideOnBtnClick, false);

    document.body.appendChild(document.createElement("ul"));
    var todoList = document.getElementsByTagName("ul")[0];
    todoList.style.display = "block";

    function addItemOnBtnClick() {
        var inputData = document.getElementById("td-item").value;
        var liItem = document.createElement("li");
        liItem.innerHTML = inputData;
        todoList.appendChild(liItem);

        return;
    }

    function deleteItemOnBtnClick() {
        var inputData = document.getElementById("td-item").value;
        var items = document.getElementsByTagName("li");
        for (var i = 0; i < items.length; i++) {
            if (items[i].innerHTML == inputData) {
                todoList.removeChild(items[i])
            }
        }
    }

    function showAndHideOnBtnClick() {
        if (todoList.style.display == "block") {
            todoList.style.display = "none";
        }
        else {
            todoList.style.display = "block";
        }
    }
})();