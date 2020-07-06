import * as $ from "jquery";

$(window).scroll(function () {
    var minHeaderHeight = 70;
    var getHeaderHeight = $(".header").outerHeight();
    var currentScroll = $(window).scrollTop();
    var headerHeight;

    if (currentScroll > 0) {
        if (
            currentScroll > getHeaderHeight - minHeaderHeight ||
            $(window).width() < 768
        ) {
            headerHeight = minHeaderHeight;
        } else {
            headerHeight = getHeaderHeight - currentScroll;
        }

        if (headerHeight >= minHeaderHeight) {
            $(".header").css({
                position: "fixed",
                top: "0",
                left: "0",
                height: headerHeight.toString() + "px",
            });
        }
        $(".main").css({
            marginTop: headerHeight.toString() + "px",
        });
    } else {
        $(".header").removeAttr("style");
        $(".main").removeAttr("style");
    }
});
