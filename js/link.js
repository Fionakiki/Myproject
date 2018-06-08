/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-06 15:58:17
 * @version $Id$
 */

function home(){
	window.location="index.html";
}
function about(){
	window.location="index_about.html";
}
function edit(){
	window.location="index_edit.html";
}
function contact(){
	window.location="index_contact.html";
}

window.onscroll=function()
{ 
    var t=document.documentElement.scrollTop||document.body.scrollTop;  
    var f1=document.getElementById("function"); 
    if(t>= 210){ 
        f1.className = "function_1";
    }else{
        f1.className = "function";
    } 
}
