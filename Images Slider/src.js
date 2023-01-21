let images = document.querySelectorAll(".img");
images.forEach(function (img) {
    img.onmouseover = function () {
        img.classList.add('active');
    }
    img.onmouseout = function () {
        img.classList.remove('active');
    }
})