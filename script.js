const panels = document.querySelectorAll(".card");
console.log(panels);

const removeActive = () => {
  panels.forEach((element) => {
    element.classList.remove("active");
    element.children[0].style.display = "none";
    console.log(element.children[0]);
  });
};

panels.forEach((element) => {
  element.addEventListener("click", () => {
    removeActive();
    element.classList.add("active");
    element.children[0].style.display = "inline";
  });
});
