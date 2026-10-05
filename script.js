function upDate(previewPic) {
    console.log("Mouse or keyboard focus detected");

    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse left or keyboard focus ended");

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Adding tabindex to images");

    var images = document.querySelectorAll(".gallery img");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}