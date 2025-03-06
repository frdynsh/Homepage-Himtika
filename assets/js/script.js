document.addEventListener("DOMContentLoaded", () => {
    // Menutup top-banner saat tombol 'x' diklik
    const closeBanner = document.querySelector(".close-banner");
    const topBanner = document.querySelector(".top-banner");
  
    if (closeBanner && topBanner) {
      closeBanner.addEventListener("click", () => {
        topBanner.style.display = "none";
      });
    }
  
    // Toggle menu navbar untuk mobile/tablet
    const menuToggle = document.querySelector(".menu-toggle");
    const navItems = document.querySelector(".nav-items");
  
    if (menuToggle && navItems) {
      menuToggle.addEventListener("click", () => {
        // Tambah/hapus class "active" pada nav-items
        navItems.classList.toggle("active");
      });
    }
  });

 
/* ================= Section FAQ ================= */
document.querySelectorAll("details").forEach((detail) => {
  let content = detail.querySelector(".faq-answer");

  detail.addEventListener("toggle", function () {
      if (detail.open) {
          content.style.height = content.scrollHeight + "px";
          content.style.opacity = "1";
          content.style.transform = "translateY(0)";

          content.addEventListener("transitionend", function resetHeight() {
              content.style.height = "auto";
              content.removeEventListener("transitionend", resetHeight);
          });
      } else {
          content.style.height = content.scrollHeight + "px";
          requestAnimationFrame(() => {
              content.style.height = "0px";
              content.style.opacity = "0";
              content.style.transform = "translateY(-5px)";
          });
      }
  });

  content.addEventListener("transitionend", function () {
      if (!detail.open) {
          content.style.height = "";
      }
  });
});
