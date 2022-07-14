function myFunction() {
    var menu = $(".dropdown-menu");
    if (!menu.hasClass("active")){
        menu.addClass("active");
    }
    else{
        menu.removeClass("active");
    }
}
$("[data-value='HN']").on("click", function(event){
    $(".dropdown-toggle").text("HN");
});
$("[data-value='HCM']").on("click", function(event){
    $(".dropdown-toggle").text("HCM");
});
$(function() {
    var header = $(".header-main");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            header.addClass("stuck");
        } else {
            header.removeClass("stuck");
        }
    });
});