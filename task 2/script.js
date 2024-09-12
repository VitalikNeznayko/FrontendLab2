let trs = document.querySelectorAll("tr");

for (let i = 0; i < trs.length; i++) {
  let tds = trs[i].querySelectorAll("td");
  for (let j = 0; j < tds.length; j++) {
    if ((i + j) % 2 === 0) {
      tds[j].classList.add("select");
    }
  }
}
