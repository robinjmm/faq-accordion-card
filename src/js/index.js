const label = document.querySelectorAll(".card__label");

label.forEach((label) => {
    label.addEventListener("click", toggleItem);
});

function toggleItem() {
    let currentElement = this.nextElementSibling;
    let isExpanded = currentElement.classList.contains("expand");
    let arrow = this.firstElementChild.firstElementChild;

    label.forEach(label => {
        let content = label.nextElementSibling;
        let arrow = label.firstElementChild.firstElementChild;

        if (content.classList.contains("expand")) {
            content.classList.remove("expand");
            arrow.classList.remove("rotate");
            label.classList.remove("bold");
        }
    });

    if (!(isExpanded)) {
        currentElement.classList.add("expand");
        arrow.classList.add("rotate");
        this.classList.add("bold");
    }
}