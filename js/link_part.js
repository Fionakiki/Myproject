/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-06 15:58:17
 * @version $Id$
 */

function home(){
	window.location="../index.html";
}
function about(){
	window.location="./index_about.html";
}
function edit(){
	window.location="./index_edit.html";
}
function contact(){
	window.location="./index_contact.html";
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

var $img = $('.picture'); 
$('input[type=file]').change(function() {
    if(typeof FileReader=='undifined')          //判断浏览器是否支持filereader  
    {  
        alert("抱歉，你的浏览器不支持 FileReader");   
    }    
    if(!/image\/\w+/.test(this.files[0].type))           //判断获取的是否为图片文件  
    {  
        alert("请确保文件为图像文件");  
    } 
    else{
    var reader = new FileReader(); 
    reader.onload = function(e) { 
        $img.prop('src', e.target.result); 
    } 
    reader.readAsDataURL(this.files[0]); 
 
    $('img').load(function() { 
        $(this).show(); 
    }); 
}
});

var style=document.getElementById("images");
var bgshow=document.getElementById("bgshow");
var loshow=document.getElementById("loshow");

function style1(){
	if(jQuery("input[type='file']").val()==""){
		alert("请上传照片");
		return;
    }
    if(style.className=="picture"||style.className=="outset-border"||style.className=="ridge-border"||style.className=="transparent"){
    	bgshow.className="bgshow";
        loshow.className="loshow";
        style.className="double-border";
    }
    else{
    	style.className="picture";
    }
}

function style2(){
	if(jQuery("input[type='file']").val()==""){
		alert("请上传照片");
		return;
	}
	if(style.className=="picture"||style.className=="double-border"||style.className=="ridge-border"||style.className=="transparent"){
    	bgshow.className="bgshow";
        loshow.className="loshow";
        style.className="outset-border";
	}
    else{
    	style.className="picture";
    }
}

function style3(){
	if(jQuery("input[type='file']").val()==""){
		alert("请上传照片");
		return;
	}
	if(style.className=="picture"||style.className=="double-border"||style.className=="outset-border"||style.className=="transparent"){
    	bgshow.className="bgshow";
        loshow.className="loshow";
        style.className="ridge-border";
	}
    else{
    	style.className="picture";
    }
}


function style4(){
	if(jQuery("input[type='file']").val()==""){
		alert("请上传照片");
		return;
	}
    if(style.className=="picture"||style.className=="double-border"||style.className=="outset-border"||style.className=="ridge-border"){
        bgshow.className="bghide";
	    loshow.className="lohide";
	    style.className="transparent";
    }
	else{
        bgshow.className="bgshow";
        loshow.className="loshow";
        style.className="picture";
    }
}

var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
    if (fileElem) {
        fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);



function editImage() {
    
    var gs       = $("#gs").val();      // grayscale
    var blur     = $("#blur").val();    // blur
    var br       = $("#br").val();      // brightness
    var ct       = $("#ct").val();      // contrast
    var huer     = $("#huer").val();    //hue-rotate
    var opacity      = $("#opacity").val(); //opacity
    var invert   = $("#invert").val();  //invert
    var saturate     = $("#saturate").val();//saturate
    var sepia    = $("#sepia").val();   //sepia

    var filter =    'grayscale(' + gs+
            '%) blur(' + blur +
            'px) brightness(' + br +
            '%) contrast(' + ct +
            '%) hue-rotate(' + huer +
            'deg) opacity(' + opacity +
            '%) invert(' + invert +
            '%) saturate(' + saturate +
            '%) sepia(' + sepia + '%)';

    $("#images").css("filter", filter);
    $("#images").css("-webkit-filter", filter); 

}

$("input[type=range]").change(editImage).mousemove(editImage);


$('#imageEditor').on('reset', function () {
    setTimeout(function() {
        editImage();
    },0);
});
