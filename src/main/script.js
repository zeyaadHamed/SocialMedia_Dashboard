$(document).ready(function () {
    // التبديل بين وضعية الإضاءة والوضع الداكن
    $("header .toggle").on("click", function() {
        $(".toggle .circle").toggleClass("circleToggle");
        $(this).toggleClass("toggleLight");
        $(".dark").text(function(_, text){
            return text === "Dark Mode" ? "Light Mode" : "Dark Mode";
        });
        $("body").toggleClass("lightBody");
        $("header").toggleClass("headerLight");
        $(".boxes .box").each(function() {
            $(this).toggleClass("cardLight");
        });
        $(".boxes .box .count").each(function() {
            $(this).toggleClass("countLight");
        });
    });
});
