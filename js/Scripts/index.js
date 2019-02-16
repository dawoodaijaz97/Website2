$("document").ready(function () {


    setMenu();
    setFont();

    $(".hamburger").on("click", function () {
        $(".hamburger").toggleClass("is-active");
        $(".navbar-nav").toggleClass("move-navbar");
        $(".navbar").toggleClass("trans-navbar");
    });
    $(window).on("resize", function () {
        console.log($(window).width());
        if ($(window).width() < 969) {
            if ($(".haburger").hasClass("is-active")) {
                $(".hamburger").removeClass("is-active");
            }
        }

        setMenu();
        setFont();
    });
    if ($(window).width() < 969) {
        $(".hamburger").trigger("click");
    }


});
var setMenu = function () {

    if ($(window).width() > 969) {
        $(".navbar-brand").css("display", "none");
        if (!$(".navbar-collapse").hasClass("show")) {
            $(".navbar-collapse").addClass("show");
            $(".navbar-nav").toggleClass("move-navbar");
            $(".navbar").toggleClass("trans-navbar");
            $(".hamburger").addClass("is-active");
        }
    }
    else {
        $(".navbar-brand").css("display", "inline-block");
        // if($(".navbar-collapse").hasClass("show")){
        //     $(".hamburger").toggleClass("is-active");
        // }
    }
};

function setFont() {
    let root = $(":root");
    if($(window).width()>1400){
        console.log("setting lager");
        root.css({
            "--navlinks-font-size":"1rem"
        })
    }else if($(window).width() <1400 && $(window).width() >1000){
        console.log("setting lager");
        root.css({
            "--navlinks-font-size":"0.8rem"
        })
    }
    else{
        root.css({
            "--navlinks-font-size":"1rem"
        })
    }
}