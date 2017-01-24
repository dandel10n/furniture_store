function initSlider(elements, activationClass) {
    var currentIndex = 0,
        itemsAmount = elements.slides.length;

    function cycleItems() {
        var item = elements.slides.eq(currentIndex);

        elements.slides.removeClass(activationClass);
        item.addClass(activationClass);
    }

    elements.nextButton.on("click", function(event) {
        event.preventDefault();

        currentIndex += 1;
        if (currentIndex > itemsAmount - 1) {
            currentIndex = 0;
        }
        cycleItems();
    });

    elements.previousButton.on("click", function(event) {
        event.preventDefault();

        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemsAmount - 1;
        }
        cycleItems();
    });
}

$(document).ready(function() {

    $("#search").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("search-form_active");
    });

    $("#hamburger-menu").on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('data-toggle-id');
        var navigation = $("#" +id);

        navigation.toggleClass("navigation_active");
    });

    $(".shop").on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('data-toggle-id');
        var catalog = $("#" + id);

        catalog.toggleClass("catalog_active");
        $(this).('.shop__menu').toggleClass("shop__menu_active");
    });


    $(".city__button").on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('data-toggle-id'),
            onePage = $("#" + id),
            allPages = onePage.parent('.city__page'),
            cityButtons = $(this).parent('.city__button');

        cityButtons.removeClass("city__button_active");

        $(this).addClass("city__button_active");

        allPages.removeClass("city__page_active");
        onePage.addClass('city__page_active');
    });

    initSlider(
        {
            slides: $('.spread'),
            nextButton: $(".preview__listing-right"),
            previousButton: $(".preview__listing-left")
        },
        "spread_active"
    );

    initSlider(
        {
            slides: $(".portfolio__blocks"),
            nextButton: $(".portfolio__listing-right"),
            previousButton: $(".portfolio__listing-left")
        },
        "portfolio_active"
    );
});
