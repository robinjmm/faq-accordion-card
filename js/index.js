const faq = document.querySelector(".card__faq");

faq.addEventListener("click", function (event) {
    let question = event.target;

    if (event.target.nodeName === "H3") {
        question.classList.toggle("active");
        let text = event.target.parentElement.nextElementSibling;
        text.classList.toggle("hidden");
    }
})