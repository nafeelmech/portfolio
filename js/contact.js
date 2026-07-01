/* ==========================================
   EMAILJS CONTACT FORM
========================================== */

emailjs.init("c4mfVIpcU3bTOiwyJ");

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const sendBtn = document.getElementById("send-btn");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  sendBtn.textContent = "Sending...";
  sendBtn.disabled = true;
  formStatus.textContent = "";

  emailjs
    .sendForm("service_5i5c2ip", "template_89rpyum", this)
    .then(() => {
      formStatus.textContent = "Message sent successfully!";
      formStatus.style.color = "#22c55e";

      contactForm.reset();
      sendBtn.textContent = "Send Message";
      sendBtn.disabled = false;
    })
    .catch((error) => {
      formStatus.textContent = "Message failed. Please try again.";
      formStatus.style.color = "#ef4444";

      sendBtn.textContent = "Send Message";
      sendBtn.disabled = false;

      console.log("EmailJS Error:", error);
    });
});
