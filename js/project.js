function openProjectModal() {
  document.getElementById("projectModal").classList.add("active");
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
}

function showTab(tabId, button) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  contents.forEach((content) => content.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  button.classList.add("active");
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");

  if (e.target === modal) {
    closeProjectModal();
  }
});
