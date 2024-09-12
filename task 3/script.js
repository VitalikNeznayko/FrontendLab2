let text =
  "inLorem ipsum dolOr Sit Ainmet consectetinur, adipisicing elit. Illo a cupiditate autem aut deleniti, aliquam corporis, rem iusto blanditiis provident odit  dignissimos facilis vel accusantium culpa veritatis, eaque libero quisquam?";

// Для заданого тексту утворити новий рядок, який буде сформований із символів рядка text, які мають індекси 12, 6, 18, 25. Виведіть в консоль сформований рядок.
let body = document.querySelector("body");
let divTask1 = document.createElement("div");
body.appendChild(divTask1);
divTask1.innerText = `${text[12]} ${text[6]} ${text[18]} ${text[25]}`;

// Виведіть у консоль рядок, утворений з рядка text шляхом приведення до нижнього регістру.
console.log(text.toLowerCase());

// Виведіть всі позиції, в яких зустрічається послідовність символів “in”
let positions = [];
let position = text.indexOf("in");

while (position != -1) {
  positions.push(position);
  position = text.indexOf("in", position + 1);
}

console.log(positions);
// Утворіть з рядка text масив підрядків шляхом розділення тексту на частини за роздільником “пробіл” та виведіть його.
let arrText = text.split(" ");
let divTaskSplit = document.createElement("div");
for (let i = 0; i < arrText.length; i++) {
  divTaskSplit.innerHTML += `${arrText[i]} `;
}
body.appendChild(divTaskSplit);
// Утворіть та виведіть рядок, який є інвертованим рядком text (текст, літери якого розташовуються у зворотному порядку).
let divTaskReverse = document.createElement("div");
divTaskReverse.innerHTML = text.split("").reverse().join("");
body.appendChild(divTaskReverse);

// Допишіть код функції, яка приведе першу літеру тексту до верхнього регістру:
function ucFirst(txt) {
   let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
   return newTxt;
}
console.log(ucFirst(`some text`));
