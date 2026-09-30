var img = [
    "Images/My Project 1.webp",
    "Images/My Project 2.webp",
    "Images/My Project 3.webp",
    "Images/My Project 4.webp",
    "Images/My Project 5.webp",
    "Images/My Project 6.webp"
];

// =========================
// SLIDER TEXT - ENGLISH
// =========================

var p_en = [
    "Where Great Food Meets a Warm Welcome.",
    "Crafted with Passion by Our Expert Chefs.",
    "Juicy Burgers, Unforgettable Flavor.",
    "Freshly Baked, Perfectly Delicious.",
    "Golden Crispy Chicken, Full of Flavor.",
    "Sweet Moments to End Every Meal."
];

// =========================
// SLIDER TEXT - ARABIC
// =========================

var p_ar = [
    "حيث يلتقي الطعام الرائع بالترحيب الدافئ.",
    "أطباق مصنوعة بشغف على يد طهاتنا المحترفين.",
    "برجر شهي، ونكهة لا تُنسى.",
    "مخبوزات طازجة ولذيذة بشكل مثالي.",
    "دجاج مقرمش ذهبي، مليء بالنكهة.",
    "لحظات حلوة لنختتم بها كل وجبة."
];

var count = [
    "1 / 6",
    "2 / 6",
    "3 / 6",
    "4 / 6",
    "5 / 6",
    "6 / 6"
];

var x = 0;

// =========================
// NEXT IMAGE
// =========================

function next_img() {

    x++;

    if (x == img.length) {
        x = 0;
    }

    document.getElementById("img_1").src = img[x];

    document.getElementById("h1_1").innerHTML = count[x];

    if (currentLanguage === "ar") {

        document.getElementById("h2_1").innerHTML = p_ar[x];

    }

    else {

        document.getElementById("h2_1").innerHTML = p_en[x];

    }

}

// =========================
// PREVIOUS IMAGE
// =========================

function prev_img() {

    x--;

    if (x < 0) {
        x = img.length - 1;
    }

    document.getElementById("img_1").src = img[x];

    document.getElementById("h1_1").innerHTML = count[x];

    if (currentLanguage === "ar") {

        document.getElementById("h2_1").innerHTML = p_ar[x];

    }

    else {

        document.getElementById("h2_1").innerHTML = p_en[x];

    }

}

// =========================
// SEND MESSAGE
// =========================

function send_message() {

    var message = document.getElementById("text_message").value;

    if (message == "") {

        if (document.documentElement.lang === "ar") {

            window.alert("من فضلك اكتب رسالة!");

        } else {

            window.alert("Please Write a Message!");

        }

    } else {

        if (document.documentElement.lang === "ar") {

            window.alert("تم إرسال رسالتك بنجاح!");

        } else {

            window.alert("Your message has been sent successfully!");

        }

    }

}

var languageBtn = document.getElementById("languageBtn");

var currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage() {

    var elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(function (element) {

        if (currentLanguage === "ar") {

            element.innerHTML = element.getAttribute("data-ar");

        } else {

            element.innerHTML = element.getAttribute("data-en");

        }

    });

    // تغيير الـ Placeholder
    var inputs = document.querySelectorAll(
        "[data-en-placeholder][data-ar-placeholder]"
    );

    inputs.forEach(function (input) {

        if (currentLanguage === "ar") {

            input.placeholder =
                input.getAttribute("data-ar-placeholder");

        } else {

            input.placeholder =
                input.getAttribute("data-en-placeholder");

        }

    });

    if (currentLanguage === "ar") {

        document.documentElement.lang = "ar";

        document.documentElement.dir = "rtl";

        languageBtn.innerHTML = "English";

    } else {

        document.documentElement.lang = "en";

        document.documentElement.dir = "ltr";

        languageBtn.innerHTML = "العربية";

    }

    var sliderText = document.getElementById("h2_1");

    if (sliderText) {

        if (currentLanguage === "ar") {

            sliderText.innerHTML = p_ar[x];

        } else {

            sliderText.innerHTML = p_en[x];

        }

    }

}

// =========================
// LANGUAGE BUTTON
// =========================

languageBtn.addEventListener("click", function () {

    if (currentLanguage === "en") {

        currentLanguage = "ar";

        localStorage.setItem("language", "ar");

    } else {

        currentLanguage = "en";

        localStorage.setItem("language", "en");

    }

    changeLanguage();

});

// =========================
// LOAD SAVED LANGUAGE
// =========================

changeLanguage();

// ==================================================
// DARK MODE
// ==================================================

(function () {

    var savedTheme = localStorage.getItem("theme") || "light";

    function applyTheme(theme) {

        var isDark = theme === "dark";

        document.documentElement.classList.toggle("dark-mode", isDark);
        document.body.classList.toggle("dark-mode", isDark);

        var themeBtn = document.getElementById("themeBtn");

        if (themeBtn) {

            if (isDark) {

                themeBtn.innerHTML =
                    currentLanguage === "ar"
                        ? "☀ الوضع الفاتح"
                        : "☀ Light";

                themeBtn.setAttribute(
                    "aria-label",
                    currentLanguage === "ar"
                        ? "تفعيل الوضع الفاتح"
                        : "Switch to light mode"
                );

            } else {

                themeBtn.innerHTML =
                    currentLanguage === "ar"
                        ? "☾ الوضع الداكن"
                        : "☾ Dark";

                themeBtn.setAttribute(
                    "aria-label",
                    currentLanguage === "ar"
                        ? "تفعيل الوضع الداكن"
                        : "Switch to dark mode"
                );

            }

        }

    }

    function createThemeButton() {

        var navList = document.querySelector("nav > ul");

        if (!navList || document.getElementById("themeBtn")) {
            return;
        }

        var themeLi = document.createElement("li");

        var themeBtn = document.createElement("button");

        themeBtn.id = "themeBtn";
        themeBtn.type = "button";

        themeBtn.addEventListener("click", function () {

            var nextTheme =
                document.documentElement.classList.contains("dark-mode")
                    ? "light"
                    : "dark";

            localStorage.setItem("theme", nextTheme);

            applyTheme(nextTheme);

        });

        themeLi.appendChild(themeBtn);

        // Put the theme control beside the language control.
        var languageLi = document.getElementById("languageBtn");

        if (languageLi && languageLi.parentElement) {

            languageLi.parentElement.insertAdjacentElement(
                "afterend",
                themeLi
            );

        } else {

            navList.appendChild(themeLi);

        }

    }

    createThemeButton();
    applyTheme(savedTheme);

    // Keep the theme button text synchronized with the selected language.
    var originalChangeLanguage = window.changeLanguage;

    if (typeof originalChangeLanguage === "function") {

        window.changeLanguage = function () {

            originalChangeLanguage();

            applyTheme(
                document.documentElement.classList.contains("dark-mode")
                    ? "dark"
                    : "light"
            );

        };

    }

})();

