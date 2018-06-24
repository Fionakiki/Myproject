/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-22 21:10:58
 * @version $Id$
 */

var $img = $('.picture');
$('input[type=file]').change(function() {
    if (typeof FileReader == 'undifined') //判断浏览器是否支持filereader  
    {
        alert("抱歉，你的浏览器不支持 FileReader");
    }
    if (!/image\/\w+/.test(this.files[0].type)) //判断获取的是否为图片文件  
    {
        alert("请确保文件为图像文件");
    } else {
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