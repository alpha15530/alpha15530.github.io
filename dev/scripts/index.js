(function() {
    const scrollSpeed = 500;
    const scrollAnimation = "swing";

    new Vue({
        el: "#page",
        data: {
            position: 0,
        },
        methods: {
            scrollToTop: function() {
                scrollWindow(0, scrollSpeed, scrollAnimation);
            },
            scrollToElement: function(event) {
                let href = event.srcElement.hash;
                let target = document.getElementById(href.slice(1));
                let bounds = target.getBoundingClientRect();
                let html = document.documentElement;
                let body = document.body;
                let y = bounds.top + (body.scrollTop || html.scrollTop) - html.clientTop;

                scrollWindow(y - 50, scrollSpeed, scrollAnimation);
            }
        },
        mounted: function() {
            var self = this;

            document.onload = function(e) {
                getPosition(self);
            }

            document.onscroll = function(e) {
                getPosition(self);
            }
        }
    });

    function getPosition(elm) {
        elm.position = document.documentElement.scrollTop || document.body.scrollTop;
    }

    function scrollWindow(position, speed, animation) {
        $("html, body").animate({ scrollTop: position }, speed, animation);
    }
})();