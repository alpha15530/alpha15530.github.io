"use strict";

new Vue({
    el: "#page",
    data: {
        position: 0
    },
    methods: {
        toTop: function toTop() {
            scrollWindow(0, 500, "swing");
        }
    },
    mounted: function mounted() {
        var self = this;
        document.onscroll = function (e) {
            self.position = document.documentElement.scrollTop || document.body.scrollTop;
        };
    }
});

function scrollWindow(position, speed, animation) {
    $("html, body").animate({ scrollTop: position }, speed, animation);
}