new Vue({
    el: "#page",
    data: {
        position: 0,
    },
    methods: {
        scrollToTop: function() {
            scrollWindow(0, 500, "swing");
        },
        scrollToElement: function(event) {
            let href = event.srcElement.hash;
            let target = document.getElementById(href.slice(1));
            let bounds = target.getBoundingClientRect();
            var html = document.documentElement;
            var body = document.body;
            var y = bounds.top + (body.scrollTop || html.scrollTop) - html.clientTop;

            scrollWindow(y - 50, 500, "swing");
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