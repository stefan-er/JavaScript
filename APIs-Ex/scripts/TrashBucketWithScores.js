//TASK CONDITIONS
//Using the exercise with the bucket implement functionality for high-score
//When the user cleans all the trash, he is asked for a nickname and his score is saved in the local storage
//The score of the user is the time that took him to clean the trash
//Implement a high-score board, that is visible on page load and shows the top 5 scores 
//The 5 users that cleaned the trash fastest

var startTime = Date.now();
var endTime = 0; //for now

var img = document.getElementsByClassName("trash");

//giving random position on the screen to every trash
for (var i = 0, len = img.length; i < len; i++) {
    img[i].style.position = "absolute";
    img[i].style.left = Math.random() * 500 + "px";
    img[i].style.top = Math.random() * 500 + "px";
}

var bucket = document.getElementById("opened");

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

    var trashInBucket = bucket.childElementCount;

    if (trashInBucket == 10) {
        endTime = (Date.now() - startTime) / 1000;
        var nameForm = document.getElementById("save-name");
        nameForm.style.display = "block";
    }
}

function onSaveButtonClick() {
    var name = document.getElementById("player-name").value;
    localStorage.setItem(name, endTime);
}

(function loadScores() {
    var scores = [];
          
    for (var i = 0; i < localStorage.length; i++) {
        var playerName = localStorage.key(i);
        var playerScore = localStorage.getItem(playerName);
        scores.push({ name: playerName, value: playerScore });
    }

    scores.sort((function (x, y) { return x.value - y.value; }));

    var len = scores.length;

    var resultHTML = "<ul>";
    for (var i = 0; i < 5 && i < len; i++) {
        resultHTML +=
        '<li>' +
        scores[i].name + "  :  " + scores[i].value +
        '</li>';
    }
    resultHTML += "</ul>";

    document.getElementById("scores").innerHTML = resultHTML;
})();
