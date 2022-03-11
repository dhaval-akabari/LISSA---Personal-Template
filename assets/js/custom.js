$(window).on("load", function() {
    $(".lds-ellipsis").fadeOut(), $(".preloader").delay(333).fadeOut("slow"), $("body").delay(333)
});
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#main_nav",
        offset: 70
    }),
    navbar = document.querySelector("nav");

function navSidebar() {
    var o = $("#navbarNav"),
        a = $("nav"),
        e = $("body");
    o.on("hidden.bs.collapse", function() {
        a.find(".sidebar-overlay").remove(), e.removeClass("scroll-hide")
    }), o.on("show.bs.collapse", function() {
        a.append('<div class="sidebar-overlay" />'), e.addClass("scroll-hide")
    }), a.on("click", ".sidebar-overlay", function() {
        o.collapse("hide")
    })
}
window.onscroll = function() {
    window.pageYOffset > 200 ? navbar.classList.add("stickyadd") : navbar.classList.remove("stickyadd")
}, $(".client-carousel").owlCarousel({
    loop: !0,
    nav: !1,
    items: 1,
    autoplay: !0,
    smartSpeed: 800,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
    autoHeight: !1,
    autoHeightClass: "owl-height"
}), $(".blog-carousel").owlCarousel({
    loop: !0,
    nav: !1,
    items: 3,
    autoplay: !0,
    smartSpeed: 800,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
    autoHeight: !1,
    autoHeightClass: "owl-height",
    responsive: {
        320: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        }
    }
}), $(window).on("load", function() {
    var o = $(".work-filter"),
        a = $("#menu-filter");
    o.isotope({
        filter: "*",
        layoutMode: "masonry"
    }), a.find("a").on("click", function() {
        var e = $(this).attr("data-filter");
        return a.find("a").removeClass("active"), $(this).addClass("active"), o.isotope({
            filter: e,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
}), $(window).on("scroll", function() {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), $(".back_top").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 800), !1
}), navSidebar(), wow = new WOW, wow.init(), $(".home-slider").owlCarousel({
    loop: 0,
    dots: false,
    arrows: true,
    nav: true,
    mouseDrag: 1,
    autoplay: true,
    items: 1,
    smartSpeed: 1000,
});
$( ".owl-prev").html('<i class="fa fa-chevron-left text-white"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right text-white"></i>');