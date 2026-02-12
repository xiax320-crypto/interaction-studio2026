
document.addEventListener("click", function () {
  window.location.href = "kale3.html";
});

const centerCircle = document.querySelector(".center-circle");

if (centerCircle) {
  centerCircle.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}


