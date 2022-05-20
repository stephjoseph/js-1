const terms = document.querySelector(".terms-and-conditions");
const button = document.querySelector(".accept");

function obCallback(payload) {
  payload[0].intersectionRatio === 1
    ? (button.disabled = false)
    : (button.disabled = true);
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 0.1,
});

ob.observe(terms.lastElementChild);
