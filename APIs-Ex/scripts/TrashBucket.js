//TASK CONDITIONS
//Write a client-side based web application that consists of a trash bucket and lots of trash items in the browser window. 
//Implement the following functionality:
//Drag trash items
//Open the bucket when a trash item is being dragged over it and close when the trash is dragged out of the bucket, or is dropped in the bucket
//To throw a trash item into the bucket, i.e. make it disappear from the browser window

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("dragged-id", ev.target.id);

    var closedBin = document.getElementById("closed");
    var openedBin = document.getElementById("opened");
    closedBin.style.display = "none";
    openedBin.style.display = "block";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dragged-id");
    ev.target.appendChild(document.getElementById(data));

    var closedBin = document.getElementById("closed");
    var openedBin = document.getElementById("opened");
    closedBin.style.display = "block";
    openedBin.style.display = "none";
}

var idNumber = 2;

function addTrashOnBtnClick() {
    var existingImg = document.getElementById("tr1");
    var img = existingImg.cloneNode(true);
    img.id = "tr" + idNumber;

    var top = Math.random();
    var left = Math.random();
    img.style.top = top * 500 + "px";
    img.style.left = left * 1000 + "px";
    idNumber++;
    document.body.appendChild(img);
}