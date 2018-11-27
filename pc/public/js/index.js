$(function(){
    // $(".f-color").css("color","#f5f5f5");
    $(".qy_nav .f-content").hide();

    $(".qy_nav .first").mouseenter(function(){
        $(this).find(".f-content").show();
    })
    $(".qy_nav .first").mouseleave(function(){
        $(this).find(".f-content").hide();
    })
    
    $("img[data-original]").lazyload({
        threshold: 200,
        effect: "fadeIn"
    });
    // $(".qy_nav .f-nav").mouseover(function(){
        // $(".f-nav .color").eq(now).addClass("f-color").end().eq(next).removeClass("f-color");
        // $(".f-color").not($(this).find(".f-color")).removerClass("f-color");
    // })
    // $(".qy_nav .color").mouseover(function(){
    //     $(".qy_nav .color").removeClass("f-color");
    // })
});