/*MENÚ MÓVIL*/
$(document).ready(function () {
    vc2 = 0;
    $('.menu-movil').click(function () {
        if (vc2 == 0) {
            $('.princ').slideDown(500);
            vc2 = 1;
        }
        else if (vc2 == 1) {
            $('.princ').slideUp(500);
            $('.sec').slideUp(500);
            vc2 = 0;
        }
    }); 
});