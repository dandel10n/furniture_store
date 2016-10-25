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

function changeCity(elements, classes) {

    $(elements.cityPageForActivate).click(function() {
        var i;
        $(this).addClass(classes.activationCityPageClass);
        $(elements.cityForActivate).addClass(classes.activationCityClass);
        for (i = 0; i < elements.citiesPagesForDeactivate.length; i++) {
            $(elements.citiesPagesForDeactivate[i]).removeClass(classes.activationCityPageClass);
            $(elements.citiesForDeactivate[i]).removeClass(classes.activationCityClass);
        }
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

    $("#kyiv_page, #kharkiv_page, #dnipro_page, .listing-left, .listing-right").click(function(event){
        event.preventDefault();
    });
    

    changeCity(
        {
            cityForActivate: $("#kyiv"),
            cityPageForActivate: $("#kyiv_page"),
            citiesForDeactivate: [$("#kharkiv"), $("#dnipro")],
            citiesPagesForDeactivate: [$("#kharkiv_page"), $("#dnipro_page")]
        },
        {
            activationCityClass: "city_active",
            activationCityPageClass: "city__page_active"
        });
    changeCity(
        {
            cityForActivate: $("#kharkiv"),
            cityPageForActivate: $("#kharkiv_page"),
            citiesForDeactivate: [$("#kyiv"), $("#dnipro")],
            citiesPagesForDeactivate: [$("#kyiv_page"), $("#dnipro_page")]
        },
        {
            activationCityClass: "city_active",
            activationCityPageClass: "city__page_active"
        });
    changeCity(
        {
            cityForActivate:$("#dnipro"),
            cityPageForActivate: $("#dnipro_page"),
            citiesForDeactivate: [$("#kharkiv"), $("#kyiv")],
            citiesPagesForDeactivate: [$("#kharkiv_page"), $("#kyiv_page")]},
        {
            activationCityClass:"city_active",
            activationCityPageClass: "city__page_active"
        });

});