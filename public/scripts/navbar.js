var scrollPoint = 260;
var scrollStart = 260;

// Scroll event handler handle sticky header.
window.onscroll = function () {
	if (window.scrollY > 64) {
        //$(".logo").slideUp();
        //$("header").addClass("sticky");
	} else {
        //$(".logo").slideDown();
        //$("header").removeClass("sticky");
    }

    if (window.innerWidth > 700) {
        if (window.scrollY > scrollPoint && window.scrollY > scrollStart) {
            $(".header-desktop").slideUp();
            scrollPoint = window.scrollY;
        } else {
            $(".header-desktop").slideDown();
            scrollPoint = window.scrollY;
        }
    } else {
        if (window.scrollY > scrollPoint && window.scrollY > scrollStart) {
            $(".header-mobile").slideUp();
            scrollPoint = window.scrollY;
        } else {
            $(".header-mobile").slideDown();
            scrollPoint = window.scrollY;
        }
    }
};

menuOpen = false;

function toggleMobileNav() {
    if (menuOpen) {
        $(".mobile-nav-container").slideUp();
        menuOpen = false;
    } else {
        $(".mobile-nav-container").slideDown();
        menuOpen = true;
    }
}