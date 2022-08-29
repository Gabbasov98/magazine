$(".header__search-open").click(function () {
    $(this).addClass("header__search-open--active")
})

$(".header__search-close").click(function () {
    $(".header__search-open").removeClass("header__search-open--active")
})

$(".page-nav__show").click(function () {
    $(this).addClass("page-nav__show--active")
})

$(document).mouseup(function (e){
    let div = $('.page-nav__show--active ~ .page-nav__hidden');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".page-nav__show").removeClass("page-nav__show--active")
    }
});

$(".header__menu-toggler").click(function() {
    $("body").toggleClass("fixed-body")
    $(".header").toggleClass("header--active")
})
