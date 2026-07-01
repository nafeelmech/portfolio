const cadModal = document.getElementById("cadModal");
const cadModalBox = document.querySelector(".cad-modal-box");
const cadViewer = document.getElementById("cadModelViewer");

function openCadModal(title, software, modelPath, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalSoftware").textContent = software;
  document.getElementById("modalDescription").textContent = description;

  if (cadViewer) {
    cadViewer.src = modelPath;
  }

  cadModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCadModal() {
  cadModal.classList.remove("active");
  document.body.style.overflow = "auto";

  setTimeout(() => {
    if (cadViewer) {
      cadViewer.src = "";
    }
  }, 350);
}

if (cadModal && cadModalBox) {
  cadModal.addEventListener("click", function (e) {
    if (!cadModalBox.contains(e.target)) {
      closeCadModal();
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && cadModal) {
    closeCadModal();
  }
});
