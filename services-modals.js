document.querySelectorAll(".modal-btn").forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

document.querySelectorAll(".close-btn").forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", event => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});
