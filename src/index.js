setTimeout(() => {$(document).ready(function() {
    var top1 = $('#home').offset().top;
    console.log(top1);
    var top2 = $('#about-me').offset().top;
    console.log(top2);
    var top3 = $('#projects').offset().top;
    var top4 = $('#contact').offset().top;

    var selectColor="lightgreen";
    var color = "white";

    $(document).scroll(function () {
        var scrollPos = $(document).scrollTop();
        console.log(scrollPos);
        if (scrollPos >= top1 && scrollPos < top2) {
            $('#nav-home').css('background-color', selectColor);
            $('#nav-about-me').css('background-color', color);
            $('#nav-projects').css('background-color', color);
            $('#nav-contact').css('background-color', color);
        } else if (scrollPos >= top2 && scrollPos < top3) {
            $('#nav-about-me').css('background-color', selectColor);
            $('#nav-home').css('background-color', color);
            $('#nav-projects').css('background-color', color);
            $('#nav-contact').css('background-color', color);
        } else if (scrollPos >= top3 && scrollPos < top4) {
            $('#nav-home').css('background-color', color);
            $('#nav-about-me').css('background-color', color);
            $('#nav-contact').css('background-color', color);
            $('#nav-projects').css('background-color', selectColor);
        } else if (scrollPos >= top4) {
            $('#nav-home').css('background-color', color);
            $('#nav-about-me').css('background-color', color);
            $('#nav-projects').css('background-color', color);
            $('#nav-contact').css('background-color', selectColor);
        }
    });
});}, 2000);