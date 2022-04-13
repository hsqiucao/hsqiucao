/* Back to top button script */
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.5) {
        // Show button
        scrollToTopBtn.classList.add("showBtn");
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn");
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
/* End of back to top button script */

/* Start of Programing Skills */

(function () {
    let number = document.querySelectorAll(".numberProgress");
    let counter = [0, 0, 0, 0, 0];
    let target = [60, 50, 70, 30, 55];
    let timecounter = [35, 35, 29, 60, 35];
    let stroke = [200, 250, 175, 330, 230];

    function isElementInViewport1(el) {
        var rect = el.getBoundingClientRect();
        return rect.top >= 50 && rect.left >= 50 && rect.bottom <= (window.innerHeight * 0.5 || document.documentElement.clientHeight * 0.5) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    function Progress() {
        for (let i = 0; i < number.length; i++) {
            if (isElementInViewport1(number[i])) {
                setInterval(() => {
                    if (counter[i] == target[i]) {
                        clearInterval();
                    } else {
                        counter[i] += 1;
                        number[i].innerHTML = counter[i] + "%";
                    }
                }, timecounter[i]);
            }
        }
    }

    window.addEventListener("load", Progress);
    window.addEventListener("resize", Progress);
    window.addEventListener("scroll", Progress);
})();
/* End of Programing Skills */

/* Experience section */
(function () {
    "use strict";
    // define variables
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth - 300);
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            } else items[i].classList.remove("in-view");
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();
/* End of experience section */