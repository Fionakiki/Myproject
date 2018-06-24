function editImage() {

    var gs = $("#gs").val(); // grayscale
    var blur = $("#blur").val(); // blur
    var br = $("#br").val(); // brightness
    var ct = $("#ct").val(); // contrast
    var huer = $("#huer").val(); //hue-rotate
    var opacity = $("#opacity").val(); //opacity
    var invert = $("#invert").val(); //invert
    var saturate = $("#saturate").val(); //saturate
    var sepia = $("#sepia").val(); //sepia

    var filter = 'grayscale(' + gs +
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


$('#imageEditor').on('reset', function() {
    setTimeout(function() {
        editImage();
    }, 0);
});