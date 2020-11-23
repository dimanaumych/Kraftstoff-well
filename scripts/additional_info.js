$( document ).ready(function() {
    let plus_buttons = document.querySelectorAll('.additional-info-button');
    let cancel_buttons = document.querySelectorAll('.additional-info-cancel');
    console.log(typeof (plus_buttons));
    console.log(cancel_buttons.length)
    for (let i = 0; i <= plus_buttons.length; i++) {
        plus_buttons[i].addEventListener('click', () => {
            $(".additional-info-text:eq("+i+")").css('display', 'unset');
            $(".additional-info-text:eq("+i+")").css('margin-top', '20px');
            $(".additional-info-section:eq(" + i + ") .additional-info-button").css('display', 'none');
            $(".additional-info-section:eq(" + i + ") .additional-info-cancel").css('display', 'unset');
            $(".additional-info-section:eq(" + i + ")").css('background-color', '#442902');
            $(".additional-info-section:eq(" + i + ")").css('color', 'white');
        });
        console.log(cancel_buttons.length)
        cancel_buttons[i].addEventListener('click', () => {
            $(".additional-info-section-wrapper:eq(" + i + ") .additional-info-text").css('display', 'none');
            $(".additional-info-section:eq(" + i + ") .additional-info-cancel").css('display', 'none');
            $(".additional-info-section:eq(" + i + ") .additional-info-button").css('display', 'unset');
            $(".additional-info-section:eq(" + i + ")").css('background-color', '#ECECEC');
            $(".additional-info-section:eq(" + i + ")").css('color', 'black');
        });
    }
});
// for (let y = 0; y < $('.additional-info-text').length; y++) {
//     $(".additional-info-text:eq(" + 3 + ")").css('color', 'red');
// }
// $('.additional-info-text:eq(0)').css('display','none')