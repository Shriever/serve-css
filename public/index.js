const counter = document.getElementById("counter");
const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    let count = counter.textContent;
    count++;
    if (count % 100 === 0) console.log(`Woo ${count}!`);
    counter.textContent = count;
  });
});
