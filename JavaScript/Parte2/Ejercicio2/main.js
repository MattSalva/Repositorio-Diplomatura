const textarea = document.querySelector("textarea");
let texto = document.getElementsByTagName('p')[0];

textarea.addEventListener("input", event => {
    const target = event.currentTarget
    const currentLength = target.value.length
    texto.innerText = `${currentLength} Caracteres`;
});


