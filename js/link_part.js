/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-06 15:58:17
 * @version $Id$
 */

function home() {
    window.location = "../index.html";
}

function about() {
    window.location = "./index_about.html";
}

function edit() {
    window.location = "./index_edit.html";
}

function contact() {
    window.location = "./index_contact.html";
}

window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var f1 = document.getElementById("navigation");
    if (t >= 210) {
        f1.className = "navigation_1";
    } else {
        f1.className = "navigation";
    }
}



var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function(e) {
    if (fileElem) {
        fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);

