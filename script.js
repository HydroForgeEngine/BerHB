const search = document.getElementById("search");

const cards = document.querySelectorAll(".card");

const notFound = document.getElementById("not-found");


search.addEventListener("input", function () {

    const text = search.value
        .toLowerCase()
        .trim();

    let found = 0;


    cards.forEach(function (card) {

        const name =
            card.dataset.name ||
            card.innerText;

        const platform =
            card.dataset.platform ||
            "";

        const content =
            (name + " " + platform)
            .toLowerCase();


        if (content.includes(text)) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    if (text !== "" && found === 0) {

        notFound.style.display = "block";

    } else {

        notFound.style.display = "none";

    }

});



/* ANIMAÇÃO DOS BOTÕES */

document.querySelectorAll(".download")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                if (
                    button.classList.contains("disabled")
                ) {
                    return;
                }

                const oldText =
                    button.innerHTML;

                button.innerHTML =
                    "⬇️ Baixando...";


                setTimeout(function () {

                    button.innerHTML =
                        oldText;

                }, 1200);

            }
        );

    });



/* MENU */

document.querySelectorAll("nav a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });
