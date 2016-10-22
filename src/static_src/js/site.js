$(document).ready(function() {

    $("#search").click(function() {
        $(this).toggleClass("search-form_active");
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