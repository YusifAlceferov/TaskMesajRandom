const esas = document.getElementById("create");
document.querySelector("#main").addEventListener("click", create);
let say = 1;
let list = [];

function create() {
  let rand = Math.trunc((Math.random(1) * 5) + 1);

  for (let i = 0; i < 1; i++) {
    const button = document.createElement("button");
    button.textContent = `Message ${rand}`;
    button.id = `b${say}`;
    let r = Math.trunc(Math.random() * 254);
    let g = Math.trunc(Math.random() * 254);
    let b = Math.trunc(Math.random() * 254);
    button.style.color = `rgb(${r},${g},${b})`;
    list.push(button.id);
    esas.append(button);
    setTimeout(() => {
      document.getElementById(list.shift()).remove()
    }, 3000);
    say++;
  }
}
