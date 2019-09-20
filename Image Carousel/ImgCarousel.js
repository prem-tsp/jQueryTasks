$(document).ready(function(){
    $(".next").on("click",function(){
        var cur_img = $(".active");
        var next_img = cur_img.next();
        if(next_img.length)
        {
            cur_img.removeClass('active').css("z-index",-10);
            next_img.addClass('active').css("z-index",10);
        }
    })
    $(".prev").on("click",function(){
        var cur_img = $(".active");
        var prev_img = cur_img.prev();
        if(prev_img.length)
        {
            cur_img.removeClass('active').css("z-index",-10);
            prev_img.addClass('active').css("z-index",10);
        }
    })
})