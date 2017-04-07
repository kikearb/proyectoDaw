$(document).ready(function () {
    vc1 = 0;
    $('.princ ul li:nth-of-type(3)').click(function () {
        if (vc1 == 0) {
            $('.sec').show(1000);
            $('.princ ul li:nth-of-type(3) a').css("color", "#EE1045");
            vc1 = 1;
        }
        else if (vc1 == 1) {
            $('.sec').hide(1000);
            vc1 = 0;
        }
    });
});