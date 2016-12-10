
$(document).ready(function(){
    $(".dropdown").click(function(e){
        e.stopPropagation();
        $(this).siblings(".dropdown").find(".dropdown-content").hide();
        $(this).find(".dropdown-content").toggle();
    });
    $("#topnav-menu").click(function(e){
        $(this).siblings(".topnav").toggle();
    });
    $(window).resize(function() {
        if($(window).width() > 500) {
            $(".topnav").show();
        }
    });
});


$(document).click(function(){
    //$(".dropdown-content").hide('slow'); 
    $(".dropdown-content").hide(); 
});
