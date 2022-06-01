// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

INPUT_TEXT.addEventListener("keypress", preventDef);
INPUT_CHECKBOX.addEventListener("click", preventDef);
HREF_LINK.addEventListener("click", preventDef);

