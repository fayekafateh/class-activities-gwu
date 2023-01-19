
$("your selector here").on("event listener type", function(){

})

$(".toggle").click(function()
{$(this).find(".toggleContainer").toggleClass("active");
$(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});

// jQuery drop-down menu
$(".searchButton").on("click",function(){
    $(".searchButton").toggleClass("active");
    if($(".searchButton").hasClass("active")){
        $(".searchBar").css("height","100vh");
        $("#searchForm").css("opacity","1");
        $(".searchIcon").removeClass("fa-search").addClass("fa-times");

    }
    else{
        $(".searchBar").css("height","0vh");
        $("#searchForm").css("opacity","0");
        $(".searchIcons").removeClass("fa-times").addClass("fa-search");

    };
});

// jQuery Preloader
function fade(){
$('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);
