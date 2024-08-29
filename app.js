let faqs= document.querySelectorAll(".faq");

faqs.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("active");
    });
});
