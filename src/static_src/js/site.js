function initSlider(elements, activationClass) {
    var currentIndex = 0,
        itemAmt = elements.items.length;

    function cycleItems() {
        var item = elements.items.eq(currentIndex);

        elements.items.removeClass(activationClass);
        item.addClass(activationClass);
    }

    elements.nextButton.click(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        cycleItems();
    });

    elements.previousButton.click(function() {

        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemAmt - 1;
        }
        cycleItems();
    });

}

$(document).ready(function() {

    $("#search").click(function() {
        $(this).toggleClass("search-form_active");
    });

    initSlider(
        {
            items: $(".spread"),
            nextButton: $(".preview__listing-right"),
            previousButton: $(".preview__listing-left")
        },
        "spread_active"
    );

    initSlider(
        {
            items: $(".portfolio__blocks"),
            nextButton: $(".portfolio__listing-right"),
            previousButton: $(".portfolio__listing-left")
        },
        "portfolio_active"
    );

    $("#kyiv, #kharkiv, #dnipro, .listing-left, .listing-right").click(function(event){
        event.preventDefault();
    });

    $("#kyiv").click(function() {
        $(this).addClass("city__page_active");
        $("#kyiv_page").addClass("city_active");
        $("#kharkiv_page, #dnipro_page").removeClass("city_active");
        $("#kharkiv, #dnipro").removeClass("city__page_active");
    });

    $("#kharkiv").click(function() {
        $(this).addClass("city__page_active");
        $("#kharkiv_page").addClass("city_active");
        $("#kyiv_page, #dnipro_page").removeClass("city_active");
        $("#kyiv, #dnipro").removeClass("city__page_active");
    });

    $("#dnipro").click(function() {
        $(this).addClass("city__page_active");
        $("#dnipro_page").addClass("city_active");
        $("#kyiv_page, #kharkiv_page").removeClass("city_active");
        $("#kyiv, #kharkiv").removeClass("city__page_active");
    });
});