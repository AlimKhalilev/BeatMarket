function initTableMain() {
    let commentTableText = document.querySelectorAll(".modal-content-simpleText");

    document.querySelectorAll(".statTable__content").forEach(item => {
        if (document.body.offsetWidth <= 768) {
            item.querySelector(".statSticker").addEventListener("click", () => {
                item.classList.toggle("statTable__content--opened");
            });
        }
        else {
            item.addEventListener("click", () => {
                item.classList.toggle("statTable__content--opened");
            });
        }
    });

    document.querySelectorAll(".statTable__item--comment").forEach(item => {
        item.addEventListener("click", (e) => {
            let text = item.querySelector(".statTable__value").innerHTML;
            if (commentTableText.length > 0) {
                commentTableText[0].innerHTML = text;
            }
            e.stopPropagation();
        });
    });
}

initTableMain();