'use strict';

$(function () {

    var speed = 500;
    var animation = "swing";

    $(window).scroll(function () {
        var position = $(this).scrollTop();

        if (300 < position) {
            $('.blc-scroll-top').fadeIn();
        } else {
            $('.blc-scroll-top').fadeOut();
        }
    });

    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 50;
        $("html, body").animate({ scrollTop: position }, speed, animation);
        return false;
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, speed, animation);
        return false;
    });
});