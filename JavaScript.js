// JavaScript para mover el carrusel de testimonios
const slider = document.querySelector('.testimonial-slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Variables para el índice actual y el número total de testimonios
let currentIndex = 0;
const totalTestimonials = document.querySelectorAll('.testimonial').length;

// Función para mover el carrusel
function moveSlider(index) {
    const width = document.querySelector('.testimonial-container').offsetWidth; // Obtiene el ancho del contenedor
    slider.style.transform = `translateX(-${index * width}px)`; // Mueve el slider
}

// Mover al siguiente testimonio
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalTestimonials; // Mueve al siguiente testimonio, vuelve al inicio si es el último
    moveSlider(currentIndex);
});

// Mover al testimonio anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Mueve al anterior, vuelve al final si es el primero
    moveSlider(currentIndex);
});

// Ajustar el slider cuando se redimensiona la ventana
window.addEventListener('resize', () => {
    moveSlider(currentIndex); // Mantiene el testimonio actual en la vista
});

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.navbar a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previene el comportamiento predeterminado del enlace
            const targetId = link.getAttribute('href').substring(1); // Obtiene el ID del destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Desplazamiento suave
                    block: 'start' // Alinea el elemento al inicio del contenedor
                });
            }
        });
    });
});


// Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío del formulario si hay errores

        // Obtiene los valores de los campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        // Validación del nombre
        if (name === '') {
            alert('Por favor, ingresa tu nombre.');
            valid = false;
        }

        // Validación del correo electrónico
        if (email === '' || !validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            valid = false;
        }

        // Validación del mensaje
        if (message === '') {
            alert('Por favor, ingresa tu mensaje.');
            valid = false;
        }

        // Si todos los campos son válidos, puedes enviar el formulario
        if (valid) {
            contactForm.submit(); // Puedes reemplazar esto con una llamada AJAX si no deseas enviar la página
        }
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

