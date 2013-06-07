//TASK CONDITIONS:
//Create a Simple JS Carousel with N images and two arrows for image control 

(function () {
    'use strict';

    var images = [];
    var imagesCount = 5;
    for (var i = 0; i < imagesCount; i++) {
        images.push(document.createElement("img"));
        images[i].src = "images/" + (i + 1) + ".jpg";
        images[i].width = "200";
        document.body.appendChild(images[i]);
    }
    
    var rightButton = document.getElementById("right-button");
    rightButton.addEventListener("click", rotateRightOnBtnClick, false);

    var leftButton = document.getElementById("left-button");
    leftButton.addEventListener("click", rotateLeftOnBtnClick, false);

    var firstImagePosition = 0;

    function rotateRightOnBtnClick() {
        firstImagePosition++;
        if (firstImagePosition == 5) firstImagePosition = 0;
        else if (firstImagePosition > 5) firstImagePosition = 1;

        var docFragment = document.createDocumentFragment();
        var currentIndex = imagesCount - firstImagePosition;
        for (var i = 1; i <= imagesCount; i++) {
            if (currentIndex == imagesCount) currentIndex = 0;
            docFragment.appendChild(images[currentIndex]);
            currentIndex++;
        }
        document.body.appendChild(docFragment);
    }

    function rotateLeftOnBtnClick() {
        firstImagePosition--;
        if (firstImagePosition == 0) firstImagePosition = 5;
        else if (firstImagePosition < 0) firstImagePosition = 4;

        var docFragment = document.createDocumentFragment();
        var currentIndex = imagesCount - firstImagePosition;
        for (var i = 1; i <= imagesCount; i++) {
            if (currentIndex == imagesCount) currentIndex = 0;
            docFragment.appendChild(images[currentIndex]);
            currentIndex++;
        }
        document.body.appendChild(docFragment);
    }
})();