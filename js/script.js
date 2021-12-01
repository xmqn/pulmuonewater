$(document).ready(function () {

    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');

    modal.fadeIn();
    modal_close.click(function () {
        modal.fadeOut();
    });

    modal.click(function () {
        modal.fadeOut();
    });

    modal_cont.click(function (event) {
        event.stopPropagation();
    });

});