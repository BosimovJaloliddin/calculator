let screen = document.querySelector(".screen");

let text = "";

function getSymbol(e) {
  text += e.target.innerText;
  screen.textContent = text;
}

function getResult() {
  screen.textContent = eval(text);
  text = `${eval(text)}`;
}
const onClear = () => {
  text = "";
  screen.textContent = text;
};
const onDel = () => {
  if (text) {
    let newText = text.slice(0, text.length - 1);
    text = newText;
    screen.textContent = text;
  }
};
