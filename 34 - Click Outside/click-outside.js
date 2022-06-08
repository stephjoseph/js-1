const cardButtons = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest(".card");
  const imgSrc = card.querySelector("img").src;
  const description = card.dataset.description;

  modalInner.innerHTML = /* html */ `
    <img width="600" height="600" src="${imgSrc.replace(
      200,
      600
    )}" alt="${description}">
    <p>${description}</p>
  `;

  modalOuter.classList.add("open");
}

function closeModal() {
  modalOuter.classList.remove("open");
}

cardButtons.forEach((button) => {
  button.addEventListener("click", handleCardButtonClick);
});

modalOuter.addEventListener("click", (e) => {
  const isOutside = !e.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  e.key === "Escape" && closeModal();
});
