const dugmad = document.querySelectorAll("button");

dugmad.forEach((button) => {
    button.addEventListener("click", () => {
        /* idemo u parent div, pa sledeci rodjak, kome je prvo dete code, a dete od
                    code je div,u tom divu se nalazi tekst za stampanje*/

        // sadrzaj polja
        const copyTextLines =
            button.parentElement.nextElementSibling.firstChild.querySelectorAll('div');
        let copyText = '';
        copyTextLines.forEach(div => {
            copyText += div.textContent + '\n';
        });
        // Kopiraj na clipboard
        navigator.clipboard.writeText(copyText);

        // Obavesti da je kopiranje zavrseno
        alert("Copied the text");
    });
});