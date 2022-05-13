const faq = document.querySelector(".card__faq");



faq.addEventListener("click", function (event) {
    let question = event.target;

    if (event.target.nodeName === "H3") {

        question.classList.toggle("active");

        // target the hidden text below the question
        let text = event.target.parentElement.nextElementSibling;
        text.classList.toggle("hidden");
        text.classList.toggle("appear");


        // target the arrow icons and flip them upside down
        let arrow = question.nextElementSibling;
        arrow.classList.toggle("rotate-180");
    }
})