var currentIndex = 0,
    items = $(".spread"),
    itemAmt = items.length;

function cycleItems() {
    var item = $(".spread").eq(currentIndex);
    items.hide();
    item.css("display","inline-block");
}

$(document).ready(function() {

    $("#search").click(function() {
        $(this).toggleClass("search-form_active");
    });

    $(".preview__listing-right").click(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        cycleItems();
    });

    $(".preview__listing-left").click(function() {

        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemAmt - 1;
        }
        cycleItems();
    });

    $("#kyiv, #kharkiv, #dnipro").click(function(event){
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