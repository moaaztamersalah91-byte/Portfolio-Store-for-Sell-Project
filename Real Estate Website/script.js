/* =====================================================
   NEXORA REAL ESTATE
   Main JavaScript
===================================================== */


/* ================= LANGUAGE ================= */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";


languageBtn.addEventListener("click", function () {

    if (currentLanguage === "en") {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        languageBtn.textContent = "English";

    } else {

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        languageBtn.textContent = "العربية";
    }


    changeLanguage();

});


function setupFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll(".favorite-btn");

    favoriteButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");

            if (this.classList.contains("active")) {
                this.innerHTML = "♥";
            } else {
                this.innerHTML = "♡";
            }
        });
    });
}

setupFavoriteButtons();

function changeLanguage() {

    const elements =
        document.querySelectorAll("[data-en][data-ar]");


    elements.forEach(function (element) {

        if (currentLanguage === "ar") {

            element.textContent =
                element.getAttribute("data-ar");

        } else {

            element.textContent =
                element.getAttribute("data-en");
        }

    });


    const inputs =
        document.querySelectorAll("[data-placeholder-en][data-placeholder-ar]");


    inputs.forEach(function (input) {

        if (currentLanguage === "ar") {

            input.placeholder =
                input.getAttribute("data-placeholder-ar");

        } else {

            input.placeholder =
                input.getAttribute("data-placeholder-en");
        }

    });


    const options =
        document.querySelectorAll("option[data-en][data-ar]");


    options.forEach(function (option) {

        if (currentLanguage === "ar") {

            option.textContent =
                option.getAttribute("data-ar");

        } else {

            option.textContent =
                option.getAttribute("data-en");
        }

    });

}


/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});
/* ================= VIEW ALL PROPERTIES ================= */

const viewAllBtn = document.getElementById("viewAllBtn");

const extraProperties =
    document.querySelectorAll(".extra-property");


let propertiesShown = false;


viewAllBtn.addEventListener("click", function () {

    propertiesShown = !propertiesShown;


    extraProperties.forEach(function (property) {

        if (propertiesShown) {

            property.classList.add("show");

        } else {

            property.classList.remove("show");

        }

    });


    if (propertiesShown) {

        if (currentLanguage === "ar") {

            viewAllBtn.textContent = "عرض أقل";

        } else {

            viewAllBtn.textContent = "Show Less";

        }

    } else {

        if (currentLanguage === "ar") {

            viewAllBtn.textContent = "عرض جميع العقارات";

        } else {

            viewAllBtn.textContent = "View All Properties";

        }

    }

});
/* ================= PROPERTY DETAILS ================= */

const propertyModal =
    document.getElementById("propertyModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");


const modalImage =
    document.getElementById("modalImage");

const modalType =
    document.getElementById("modalType");

const modalTitle =
    document.getElementById("modalTitle");

const modalLocation =
    document.getElementById("modalLocation");

const modalPrice =
    document.getElementById("modalPrice");

const modalBeds =
    document.getElementById("modalBeds");

const modalBaths =
    document.getElementById("modalBaths");

const modalArea =
    document.getElementById("modalArea");

const modalDescription =
    document.getElementById("modalDescription");


/* Property Data */

const properties = [

    {
        image: "Images/property-1.webp",

        typeEn: "Luxury Villa",
        typeAr: "فيلا فاخرة",

        titleEn: "Modern Luxury Villa",
        titleAr: "فيلا عصرية فاخرة",

        locationEn: "📍 New Cairo, Egypt",
        locationAr: "📍 القاهرة الجديدة، مصر",

        price: "$850,000",

        beds: "4",
        baths: "3",
        area: "320 m²",

        descriptionEn:
            "A stunning modern villa featuring elegant architecture, spacious interiors, a private swimming pool and beautifully landscaped outdoor spaces.",

        descriptionAr:
            "فيلا عصرية رائعة تتميز بتصميم معماري أنيق ومساحات داخلية واسعة وحمام سباحة خاص وحديقة خارجية مميزة."
    },


    {
        image: "Images/property-2.webp",

        typeEn: "Apartment",
        typeAr: "شقة",

        titleEn: "Modern City Apartment",
        titleAr: "شقة عصرية في المدينة",

        locationEn: "📍 New Cairo, Egypt",
        locationAr: "📍 القاهرة الجديدة، مصر",

        price: "$420,000",

        beds: "3",
        baths: "2",
        area: "180 m²",

        descriptionEn:
            "A sophisticated city apartment with modern interiors, panoramic windows and premium finishes.",

        descriptionAr:
            "شقة عصرية راقية تتميز بتصميم داخلي حديث ونوافذ بانورامية وتشطيبات فاخرة."
    },


    {
        image: "Images/property-3.webp",

        typeEn: "Beach House",
        typeAr: "منزل على البحر",

        titleEn: "Exclusive Beach Villa",
        titleAr: "فيلا شاطئية فاخرة",

        locationEn: "📍 North Coast, Egypt",
        locationAr: "📍 الساحل الشمالي، مصر",

        price: "$1,200,000",

        beds: "5",
        baths: "4",
        area: "410 m²",

        descriptionEn:
            "An exclusive beachfront villa with a private infinity pool and breathtaking Mediterranean views.",

        descriptionAr:
            "فيلا شاطئية فاخرة مع حمام سباحة خاص وإطلالة رائعة على البحر المتوسط."
    },


    {
        image: "Images/property-4.webp",

        typeEn: "Penthouse",
        typeAr: "بنتهاوس",

        titleEn: "Skyline Luxury Penthouse",
        titleAr: "بنتهاوس فاخر بإطلالة على المدينة",

        locationEn: "📍 Zamalek, Cairo",
        locationAr: "📍 الزمالك، القاهرة",

        price: "$950,000",

        beds: "4",
        baths: "3",
        area: "290 m²",

        descriptionEn:
            "A premium penthouse offering stunning skyline views, elegant interiors and exceptional privacy.",

        descriptionAr:
            "بنتهاوس فاخر يوفر إطلالات رائعة على المدينة وتصميمًا داخليًا أنيقًا وخصوصية استثنائية."
    },


    {
        image: "Images/property-5.webp",

        typeEn: "Family House",
        typeAr: "منزل عائلي",

        titleEn: "Contemporary Family Home",
        titleAr: "منزل عائلي عصري",

        locationEn: "📍 Sheikh Zayed, Egypt",
        locationAr: "📍 الشيخ زايد، مصر",

        price: "$680,000",

        beds: "4",
        baths: "3",
        area: "350 m²",

        descriptionEn:
            "A beautiful contemporary family home designed for comfort, privacy and modern living.",

        descriptionAr:
            "منزل عائلي عصري مصمم ليوفر الراحة والخصوصية وأسلوب الحياة الحديث."
    },


    {
        image: "Images/property-6.webp",

        typeEn: "Commercial",
        typeAr: "عقار تجاري",

        titleEn: "Premium Office Building",
        titleAr: "مبنى مكاتب فاخر",

        locationEn: "📍 New Capital, Egypt",
        locationAr: "📍 العاصمة الإدارية الجديدة، مصر",

        price: "$1,850,000",

        beds: "12",
        baths: "—",
        area: "850 m²",

        descriptionEn:
            "A premium commercial property designed for modern businesses with spacious offices and dedicated parking.",

        descriptionAr:
            "عقار تجاري فاخر مصمم للشركات الحديثة مع مكاتب واسعة ومواقف سيارات مخصصة."
    },


    {
        image: "Images/property-7.webp",

        typeEn: "Apartment",
        typeAr: "شقة",

        titleEn: "Luxury Downtown Apartment",
        titleAr: "شقة فاخرة في وسط المدينة",

        locationEn: "📍 Cairo, Egypt",
        locationAr: "📍 القاهرة، مصر",

        price: "$520,000",

        beds: "3",
        baths: "2",
        area: "210 m²",

        descriptionEn:
            "A premium downtown apartment combining modern design, comfort and spectacular city views.",

        descriptionAr:
            "شقة فاخرة في وسط المدينة تجمع بين التصميم العصري والراحة والإطلالات الرائعة."
    },


    {
        image: "Images/property-8.webp",

        typeEn: "Villa",
        typeAr: "فيلا",

        titleEn: "Contemporary Luxury Villa",
        titleAr: "فيلا عصرية فاخرة",

        locationEn: "📍 Sheikh Zayed, Egypt",
        locationAr: "📍 الشيخ زايد، مصر",

        price: "$1,050,000",

        beds: "5",
        baths: "4",
        area: "460 m²",

        descriptionEn:
            "A magnificent contemporary villa featuring luxurious interiors, a private pool and beautifully landscaped surroundings.",

        descriptionAr:
            "فيلا عصرية فاخرة تتميز بتصميم داخلي راقٍ وحمام سباحة خاص ومساحات خارجية جميلة."
    },


    {
        image: "Images/property-9.webp",

        typeEn: "Duplex",
        typeAr: "دوبلكس",

        titleEn: "Modern Luxury Duplex",
        titleAr: "دوبلكس فاخر عصري",

        locationEn: "📍 New Cairo, Egypt",
        locationAr: "📍 القاهرة الجديدة، مصر",

        price: "$730,000",

        beds: "4",
        baths: "3",
        area: "310 m²",

        descriptionEn:
            "A spacious modern duplex with double-height living areas and premium contemporary finishes.",

        descriptionAr:
            "دوبلكس واسع وعصري يتميز بمساحات معيشة مرتفعة وتشطيبات عصرية فاخرة."
    },


    {
        image: "Images/property-10.webp",

        typeEn: "Beach Villa",
        typeAr: "فيلا شاطئية",

        titleEn: "Mediterranean Beach Villa",
        titleAr: "فيلا متوسطية على البحر",

        locationEn: "📍 North Coast, Egypt",
        locationAr: "📍 الساحل الشمالي، مصر",

        price: "$1,350,000",

        beds: "5",
        baths: "4",
        area: "430 m²",

        descriptionEn:
            "An exclusive Mediterranean villa offering luxurious outdoor spaces, a private pool and stunning sea views.",

        descriptionAr:
            "فيلا متوسطية فاخرة توفر مساحات خارجية راقية وحمام سباحة خاص وإطلالة ساحرة على البحر."
    },


    {
        image: "Images/property-11.webp",

        typeEn: "Penthouse",
        typeAr: "بنتهاوس",

        titleEn: "Skyline Premium Penthouse",
        titleAr: "بنتهاوس فاخر بإطلالة بانورامية",

        locationEn: "📍 New Cairo, Egypt",
        locationAr: "📍 القاهرة الجديدة، مصر",

        price: "$1,500,000",

        beds: "4",
        baths: "4",
        area: "380 m²",

        descriptionEn:
            "An exclusive penthouse with panoramic skyline views, a premium terrace and sophisticated interiors.",

        descriptionAr:
            "بنتهاوس فاخر مع إطلالات بانورامية وتراس راقٍ وتصميم داخلي متطور."
    },


    {
        image: "Images/property-12.webp",

        typeEn: "Commercial",
        typeAr: "عقار تجاري",

        titleEn: "Premium Business Center",
        titleAr: "مركز أعمال فاخر",

        locationEn: "📍 New Capital, Egypt",
        locationAr: "📍 العاصمة الإدارية الجديدة، مصر",

        price: "$2,200,000",

        beds: "15",
        baths: "—",
        area: "1100 m²",

        descriptionEn:
            "A premium business center offering modern office spaces, excellent facilities and a prestigious location.",

        descriptionAr:
            "مركز أعمال فاخر يوفر مكاتب حديثة ومرافق متطورة وموقعًا مميزًا."
    }

];


/* View Details Buttons */

const viewDetailsButtons =
    document.querySelectorAll(".property-bottom button");


viewDetailsButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        const property = properties[index];

        openPropertyModal(property);

    });

});


/* Open Modal */

function openPropertyModal(property) {

    modalImage.src = property.image;

    if (currentLanguage === "ar") {

        modalType.textContent = property.typeAr;

        modalTitle.textContent = property.titleAr;

        modalLocation.textContent = property.locationAr;

        modalDescription.textContent =
            property.descriptionAr;

    } else {

        modalType.textContent = property.typeEn;

        modalTitle.textContent = property.titleEn;

        modalLocation.textContent = property.locationEn;

        modalDescription.textContent =
            property.descriptionEn;

    }

    modalPrice.textContent = property.price;

    modalBeds.textContent = property.beds;

    modalBaths.textContent = property.baths;

    modalArea.textContent = property.area;


    propertyModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* Close Modal */

function closePropertyModal() {

    propertyModal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closePropertyModal
);


modalOverlay.addEventListener(
    "click",
    closePropertyModal
);


/* ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closePropertyModal();

    }

});
/* ================= COUNTER ANIMATION ================= */

const counters =
    document.querySelectorAll(".counter");


let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;


    counters.forEach(function (counter) {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            target / 60;


        const updateCounter = function () {

            current += increment;


            if (current < target) {

                counter.textContent =
                    Math.floor(current);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent = target;

            }

        };


        updateCounter();

    });

}


/* Start when stats appear */

const statsSection =
    document.querySelector(".stats");


const statsObserver =
    new IntersectionObserver(
        function (entries) {

            if (entries[0].isIntersecting) {

                startCounters();

                statsObserver.disconnect();

            }

        },
        {
            threshold: 0.3
        }
    );


if (statsSection) {

    statsObserver.observe(statsSection);

}
