function initSlider(elements, activationClass) {
    var currentIndex = 0;
    var itemsAmount = elements.slides.length;

    function cycleItems() {
        var item = elements.slides[currentIndex];

        for (var i = 0; i < itemsAmount; i++) {
            elements.slides[i].classList.remove(activationClass);
        }
        item.classList.add(activationClass);
    }

    elements.nextButton.addEventListener("click", function(event) {
        event.preventDefault();

        currentIndex += 1;
        if (currentIndex > itemsAmount - 1) {
            currentIndex = 0;
        }
        cycleItems();
    });

    elements.previousButton.addEventListener("click", function(event) {
        event.preventDefault();

        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemsAmount - 1;
        }
        cycleItems();
    });
}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("search").addEventListener("click", function(event){
        event.preventDefault();
        this.classList.toggle("search-form_active");
    });

    document.querySelector(".header").addEventListener("click", function(event) {
        var target = event.target;

        var id = target.getAttribute('data-toggle-id');
        if (!id) return;

        var navigation = document.getElementById(id);

        navigation.classList.toggle("navigation_active");
    });

    var shopButtons = document.querySelectorAll(".shop");
    for (var a = 0; a < shopButtons.length; a++) {
        shopButtons[a].addEventListener("click", function (event) {
            var target = this;

            var id = target.getAttribute('data-toggle-id');

            event.preventDefault();

            var catalog = document.getElementById(id);

            catalog.classList.toggle("catalog_active");
            target.querySelector('.shop__menu').classList.toggle("shop__menu_active");

        });
    }

    initSlider(
        {
            slides: document.querySelectorAll('.spread'),
            nextButton: document.querySelector(".preview__listing-right"),
            previousButton: document.querySelector(".preview__listing-left")
        },
        "spread_active"
    );

    initSlider(
        {
            slides: document.querySelectorAll(".portfolio__blocks"),
            nextButton: document.querySelector(".portfolio__listing-right"),
            previousButton: document.querySelector(".portfolio__listing-left")
        },
        "portfolio_active"
    );

    document.addEventListener("click", function(event) {
        var target = event.target;

        var id = target.getAttribute('data-toggle-id');
        if (!id) return;

        event.preventDefault();

        var onePage = document.getElementById(id);
        var allPages = onePage.parentNode.querySelectorAll('.city__page');
        var cityButtons = target.parentNode.querySelectorAll('.city__button');

        for (var q = 0; q < cityButtons.length; q++) {
            cityButtons[q].classList.remove("city__button_active");
        }
        target.classList.add("city__button_active");

        for (var i=0; i < allPages.length; i++) {
            allPages[i].classList.remove("city__page_active");
        }
        onePage.classList.add('city__page_active');
    });
});
