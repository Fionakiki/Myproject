/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-06 15:58:17
 * @version $Id$
 */

function home(){
	window.location="./index.html";
}
function about(){
	window.location="./html/index_about.html";
}
function edit(){
	window.location="./html/index_edit.html";
}
function contact(){
	window.location="./html/index_contact.html";
}

window.onscroll=function()
{ 
    var t=document.documentElement.scrollTop||document.body.scrollTop;  
    var f1=document.getElementById("navigation"); 
    if(t>= 210){ 
        f1.className = "navigation_1";
    }else{
        f1.className = "navigation";
    } 
}