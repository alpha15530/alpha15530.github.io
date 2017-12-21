$(() => {

    let speed = 500;
    let animation = "swing";

    $(window).scroll(function() {
        let position = $(this).scrollTop();

        if (300 < position) {
            $('.blc-scroll-top').fadeIn();
        } else {
            $('.blc-scroll-top').fadeOut();
        }
    });

    $('a[href^="#"]').click(function() {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - 50;
        $("html, body").animate({ scrollTop: position }, speed, animation);
        return false;
    });

    $('.scroll-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, speed, animation);
        return false;
    });
});