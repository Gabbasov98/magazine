$(".header__search-toggle").click(function () {
    $(this).toggleClass("header__search-toggle--active")
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

$(".header__burger").click(function() {
    $("body").toggleClass("fixed-body")
    $(".header").toggleClass("header--active")
})
