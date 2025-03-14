document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("default-carousel");
  const items = carousel.querySelectorAll("[data-carousel-item]");
  const indicators = carousel.querySelectorAll("[data-carousel-slide-to]");
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");

  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle("hidden", i !== index);
    });

    indicators.forEach((indicator, i) => {
      indicator.setAttribute("aria-current", i === index);
    });

    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % items.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(prevIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  // Asignar eventos a los botones
  nextButton.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevButton.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  // Asignar eventos a los indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      stopAutoSlide();
      showSlide(index);
      startAutoSlide();
    });
  });

  // Mostrar el primer slide al inicio
  showSlide(currentIndex);
  startAutoSlide();
});


