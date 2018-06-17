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
    var f1=document.getElementById("function"); 
    if(t>= 210){ 
        f1.className = "function_1";
    }else{
        f1.className = "function";
    } 
}

var $img = $('img'); 
$('input[type=file]').change(function() { 
    var reader = new FileReader(); 
    reader.onload = function(e) { 
        $img.prop('src', e.target.result); 
    } 
    reader.readAsDataURL(this.files[0]); 
 
    $('img').load(function() { 
        $(this).show(); 
    }); 
}); 

function style1(){
    var sty1=document.getElementById("images");
    sty1.className = "double-border";
}

/*$("input:radio").click(function(){  
    var domName = $(this).attr('name');//获取当前单选框控件name 属性值   
    var checkedState = $(this).attr('checked');//记录当前选中状态  
    $("input:radio[name='" + domName + "']").attr('checked',false);//1.  
    $(this).attr('checked',true);//2.  
    if(checkedState == 'checked'){  
        $(this).attr('checked',false); //3.  
    }  
}); */

var oDiv = document.getElementById('water');
oDiv.onclick=function(){
    var sty2=document.getElementById("images");
    sty2.className = "outset-border";
}
