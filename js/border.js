
var style=document.getElementById("images");
var bgshow=document.getElementById("bgshow");
var loshow=document.getElementById("loshow");
var tape=document.getElementById("tape");
var clip=document.getElementById("clip");


function style1(){
	if(jQuery("input[type='file']").val()==""){
		alert("请上传照片");
		return;
	}
	if(style.className=="picture"||style.className=="outset-border"||style.className=="ridge-border"||style.className=="thin-border"||style.className=="black-border"){
		bgshow.className="bgshow";
		loshow.className="loshow";
		style.className="double-border";
		tape.style.display="none";
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
	if(style.className=="picture"||style.className=="double-border"||style.className=="ridge-border"||style.className=="thin-border"||style.className=="black-border"){
		bgshow.className="bgshow";
		loshow.className="loshow";
		style.className="outset-border";
		tape.style.display="none";
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
	if(style.className=="picture"||style.className=="double-border"||style.className=="outset-border"||style.className=="thin-border"||style.className=="black-border"){
		bgshow.className="bgshow";
		loshow.className="loshow";
		style.className="ridge-border";
		tape.style.display="none";
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
	if(style.className=="picture"||style.className=="double-border"||style.className=="outset-border"||style.className=="ridge-border"||style.className=="black-border"){
		bgshow.className="bgshow";
		loshow.className="loshow";
		style.className="thin-border";
		tape.style.display="block";
	}
	else{
		style.className="picture";
		tape.style.display="none";
	}
}

function style5(){
	if(jQuery("input[type='file']").val()==""){
		alert("请上传照片");
		return;
	}
	if(style.className=="picture"||style.className=="double-border"||style.className=="ridge-border"||style.className=="thin-border"||style.className=="outset-border"){
		bgshow.className="bgshow";
		loshow.className="loshow";
		style.className="black-border";
		tape.style.display="none";
	}
	else{
		style.className="picture";
	}
}