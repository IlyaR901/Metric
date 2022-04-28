$(document).ready(function () {
    $('.info__block_title').click(function () {
        $(this).toggleClass('spoiler').next().slideToggle(300);
    });
    $('.header__burger').click(function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});