
$(document).ready(function(){
    $(".dropdown").click(function(e){
        e.stopPropagation();
        $(this).siblings(".dropdown").find(".dropdown-content").hide();
        $(this).find(".dropdown-content").toggle();
    });
    
});


$(document).click(function(){
    //$(".dropdown-content").hide('slow'); 
    $(".dropdown-content").hide(); 
});
