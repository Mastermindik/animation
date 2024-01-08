const box = document.querySelectorAll(".box");
const modal = document.getElementById("modal");
const loader = document.getElementById("loader");
const mark = document.getElementById("mark");

box.forEach((e) =>
  e.addEventListener("click", (e) => {
    e.currentTarget.classList.add("open");
    setTimeout(() => {
      modal.style.display = "flex";
    }, 1000);
    setTimeout(() => {
      loader.classList.add("complete");
      mark.classList.add("checked");
    }, 3500);
  })
);

modal.addEventListener("click", () => {
  loader.classList.remove("complete");
  mark.classList.remove("checked");
  modal.style.display = "none";
});
