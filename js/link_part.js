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
    if(jQuery("input[type='file']").val()==""){
        alert("请上传照片");
    }
    else{
        sty1.className="double-border";
    }
}

function style2(){
    var sty2=document.getElementById("images");
    if(jQuery("input[type='file']").val()==""){
        sty2.className="picture";
    }
    else{
        sty2.className="outset-border";
    }
}


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
