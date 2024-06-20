let circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = "green";
  });
});
