document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    // RegEx para validaciones
    const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de Nombre y Apellido
    if (!nameRegex.test(nameInput.value.trim())) {
      nameError.classList.remove("hidden");
      valid = false;
    } else {
      nameError.classList.add("hidden");
    }

    // Validación de Email
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.classList.remove("hidden");
      valid = false;
    } else {
      emailError.classList.add("hidden");
    }

    // Validación de Mensaje (mínimo 10 caracteres)
    if (messageInput.value.trim().length < 10) {
      messageError.classList.remove("hidden");
      valid = false;
    } else {
      messageError.classList.add("hidden");
    }

    // Si todo es válido, enviar formulario
    if (valid) {
      alert("Formulario enviado con éxito");
      form.reset();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("[data-collapse-toggle]");
  const navbarMenu = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", function () {
    navbarMenu.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");

  // Marca "Home" como activo por defecto
  const homeLink = document.querySelector('a[href="#home"]');
  homeLink.classList.add("text-[#E09F3E]");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Restablece todos los enlaces a blanco y elimina el amarillo
      links.forEach((item) => {
        item.classList.remove("text-[#E09F3E]");
        item.classList.add("text-white");
      });

      // Cambia el color del enlace clicado a amarillo
      this.classList.remove("text-white");
      this.classList.add("text-[#E09F3E]");
    });
  });
});

// Referencias a los elementos
const header = document.getElementById("header");
const headerTitle = document.getElementById("header-title");
const headerContent = document.getElementById("header-content");

// Función que maneja el cambio de tamaño y color al hacer scroll
window.onscroll = function () {
  let scrollPosition = window.scrollY;

  // Si el usuario hace scroll, se cambia el tamaño del header
  if (scrollPosition > 50) {
    headerTitle.classList.remove(
      "lg:text-6xl",
      "md:text-4xl",
      "text-[#9E2A2B]"
    );
    headerTitle.classList.add("lg:text-4xl", "md:text-3xl", "text-[#540B0E]");
  } else {
    header.classList.add("py-10");
    headerTitle.classList.remove("lg:text-4xl", "md:text-3xl");
    headerTitle.classList.add("lg:text-6xl", "md:text-4xl");
  }

  // Cambiar tamaño de h1 cuando está en la sección del header (scroll = 0)
  const h1Elements = document.querySelectorAll("h1");
  h1Elements.forEach((h1) => {
    if (scrollPosition === 0) {
      h1.classList.remove("lg:text-4xl", "md:text-3xl", "text-[#540B0E]");
    } else {
      h1.classList.add("lg:text-4xl", "md:text-3xl", "text-[#9E2A2B]");
      h1.classList.remove("lg:text-6xl", "md:text-4xl");
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const options = {
    root: null, // Usamos el viewport como raíz
    threshold: 0.5, // Queremos que la sección esté al menos al 50% visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      const title = section.querySelector("h1"); // Ahora seleccionamos h1

      if (entry.isIntersecting) {
        // Sección visible: Agregar las clases de Tailwind para cambiar color y tamaño
        title.classList.add("text-[#540B0E]", "scale-110");
        title.classList.remove("text-[#540B0E]");
      } else {
        // Sección no visible: Restablecer a su estado original
        title.classList.remove("text-[#540B0E]", "scale-110");
        title.classList.add("text-[#540B0E]");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
