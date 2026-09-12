/* =========================================================
   JAY HIND PANIPURI
   MENU JAVASCRIPT

   FEATURES:
   - Category filtering
   - Dark / White theme
   - Remembers selected theme
   - NO CART
   - NO PRICES
   - NO CHECKOUT
   - NO WHATSAPP ORDER
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    const categoryButtons =
        document.querySelectorAll(".category-btn");

    const menuCards =
        document.querySelectorAll(".menu-card");


    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {


            const selectedCategory =
                this.dataset.category;


            /* Remove active from all buttons */

            categoryButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Add active to selected button */

            this.classList.add("active");


            /* Filter cards */

            menuCards.forEach(function (card) {


                const cardCategory =
                    card.dataset.category;


                const shouldShow =
                    selectedCategory === "all" ||
                    selectedCategory === cardCategory;


                if (shouldShow) {

                    card.classList.remove("hidden");


                    /* Restart animation */

                    card.classList.remove("show-card");

                    void card.offsetWidth;

                    card.classList.add("show-card");

                }

                else {

                    card.classList.add("hidden");

                    card.classList.remove("show-card");

                }

            });

        });

    });



    /* =====================================================
       THEME SYSTEM
    ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");


    /* Check previously saved theme */

    const savedTheme =
        localStorage.getItem("jayHindTheme");


    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        themeToggle.textContent = "🌙";

    }

    else {

        document.body.classList.remove("light-theme");

        themeToggle.textContent = "☀️";

    }



    /* =====================================================
       THEME BUTTON
    ===================================================== */

    themeToggle.addEventListener("click", function () {


        document.body.classList.toggle("light-theme");


        const isLight =
            document.body.classList.contains("light-theme");


        if (isLight) {

            /* White theme */

            themeToggle.textContent = "🌙";

            localStorage.setItem(
                "jayHindTheme",
                "light"
            );

        }

        else {

            /* Dark theme */

            themeToggle.textContent = "☀️";

            localStorage.setItem(
                "jayHindTheme",
                "dark"
            );

        }

    });

});