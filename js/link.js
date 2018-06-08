/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-06 15:58:17
 * @version $Id$
 */

function shift(){
	window.location="index.html";
}

window.onscroll=function()
{ 
    var t=document.documentElement.scrollTop||document.body.scrollTop;  
    var f1=document.getElementById("function"); 
    if(t>= 100){ 
        f1.className = "function_1";
    }else{
        f1.className = "function";
    }
