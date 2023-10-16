// Obtén todas las preguntas y respuestas
const faqQuestions = document.querySelectorAll('.faq-question');

// Agrega un event listener a cada pregunta
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Alternar la clase 'active' para mostrar/ocultar la respuesta
        question.classList.toggle('active');
    });
});
