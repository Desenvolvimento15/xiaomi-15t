$(".slick-track").slick({
  lazyLoad: "ondemand",
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

$(".slick-end").slick({
  lazyLoad: "ondemand",
  arrows: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Esconde todos os modais na carga da página ---
  document.querySelectorAll(".modal1, .modal2").forEach((modal) => {
    modal.style.display = "none"; // para modal1 e modal2
  });
  document.querySelectorAll("[class*='_ye']").forEach((modal) => {
    modal.classList.add("hide"); // para modais tipo slick-slide
  });

  // --- Listener único de clique ---
  document.addEventListener("click", (e) => {
    const target = e.target;

    // --- ABRIR modal tipo slick-slide ---
    if (target.matches(".slick-slide img[role='button']")) {
      const slide = target.closest(".slick-slide");
      const modal = slide.querySelector("[class*='_ye']");
      if (modal) modal.classList.remove("hide");
    }

    // --- FECHAR modal tipo slick-slide ---
    if (target.matches("[class*='_ye'] img[role='button']")) {
      const modal = target.closest("[class*='_ye']");
      if (modal) modal.classList.add("hide");
    }

    // --- ABRIR modal tipo div300 (modal1) ---
    if (target.closest(".div300[role='button']")) {
      const trigger = target.closest(".div300[role='button']");
      const modal = trigger.querySelector(".modal1");
      if (modal) modal.style.display = "flex";
    }

    // --- FECHAR modal tipo modal1 ---
    if (target.matches(".modal1 img[role='button']")) {
      const modal = target.closest(".modal1");
      if (modal) modal.style.display = "none";
    }

    // --- ABRIR modal tipo div677 (modal2) ---
    if (target.closest(".div677[role='button']")) {
      const trigger = target.closest(".div677[role='button']");
      const modal = trigger.querySelector(".modal2");
      if (modal) modal.style.display = "flex";
    }

    // --- FECHAR modal tipo modal2 ---
    if (target.matches(".modal2 img[role='button']")) {
      const modal = target.closest(".modal2");
      if (modal) modal.style.display = "none";
    }
  });
});
