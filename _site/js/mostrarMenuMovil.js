/*MENÚ MÓVIL*/
$(document).ready(function () {
    vc2 = 0;
    $('.menu-movil').click(function () {
        if (vc2 == 0) {
            $('.princ').show(1000);
            vc2 = 1;
        }
        else if (vc2 == 1) {
            $('.princ').hide(1000);
            $('.sec').hide(1000);
            vc2 = 0;
        }
    }); 
});