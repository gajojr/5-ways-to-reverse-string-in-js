const dugmad = document.querySelectorAll("button");

dugmad.forEach((button) => {
    button.addEventListener("click", () => {
        /* idemo u parent div, pa sledeci rodjak, kome je prvo dete code, a dete od
                    code je div,u tom divu se nalazi tekst za stampanje*/

        // sadrzaj polja
        const copyText =
            button.parentElement.nextElementSibling.firstChild.firstChild.textContent;

        console.log(copyText);

        // Kopiraj na clipboard
        navigator.clipboard.writeText(copyText);

        // Obavesti da je kopiranje zavrseno
        alert("Copied the text");
    });
});