const article = document.getElementById("article");
let isBlown = false;

function splitText(element) {
  const nodes = element.querySelectorAll("h1, h2,h3,h4, p");

  nodes.forEach(node => {
    const text = node.innerText;
    node.innerHTML = "";

    text.split("").forEach(char => {
      const span = document.createElement("span");
      span.classList.add("letter");
      span.innerText = char === " " ? "\u00A0" : char;
      node.appendChild(span);
    });
  });
}

splitText(article);

article.addEventListener("click", () => {
  const letters = document.querySelectorAll(".letter");
  isBlown = !isBlown;

  letters.forEach(letter => {
    if (isBlown) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 600;
      const rotate = (Math.random() - 0.5) * 720;

      letter.style.transform =
        `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
      letter.style.opacity = "0";
    } else {
      letter.style.transform = "translate(0,0) rotate(0deg)";
      letter.style.opacity = "1";
    }
  });
});
