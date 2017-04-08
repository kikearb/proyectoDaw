$(document).ready(function () {
    $('.princ ul li:nth-of-type(3)').mouseenter(function () {
        $('body').css("cursor", "pointer");
        $('.princ ul li:nth-of-type(3)').css("color", "#EE1045");
    });
    $('.princ ul li:nth-of-type(3)').mouseleave(function () {
        $('body').css("cursor", "default");
        $('.princ ul li:nth-of-type(3)').css("color", "black");
    });
    vc1 = 0;
    $('.princ ul li:nth-of-type(3)').click(function () {
        if (vc1 == 0) {
            $('.sec').slideDown(500);
            $('.princ ul li:nth-of-type(3) a').css("color", "#EE1045");
            vc1 = 1;
        }
        else if (vc1 == 1) {
            $('.sec').slideUp(500);
            vc1 = 0;
        }
    });
});