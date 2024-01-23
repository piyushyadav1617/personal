const body = document.body;
const main = document.getElementById("main");

let sx = 0, // For scroll positions
  sy = 0;
let dx = sx, // For container positions
  dy = sy;

body.style.height = `${main.clientHeight}px`;

main.style.position = "fixed";
main.style.top = 0;
main.style.left = 0;
main.style.transition = "transform 0.1s ease"; // Added smooth transition

window.addEventListener("scroll", easeScroll);

function easeScroll() {
  sx = window.scrollX;
  sy = window.scrollY;
}

window.requestAnimationFrame(render);

function render() {
  dx = li(dx, sx, 0.08); // Adjusted interpolation factor
  dy = li(dy, sy, 0.08); // Adjusted interpolation factor

  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}
