function showCert(imagePath, clickedButton) {
  const certImage = document.getElementById("certImage");
  const certButtons = document.querySelectorAll(".cert-card");

  certImage.src = imagePath;

  certButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  clickedButton.classList.add("active");
}
