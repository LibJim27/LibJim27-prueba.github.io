// Selecciona todos los botones de compra
const buyButtons = document.querySelectorAll('.buy-btn');

// Recorre cada botón de compra
buyButtons.forEach(button => {
  // Agrega un event listener para el clic
  button.addEventListener('click', e => {
    // Obtén el elemento padre (card) del botón
    const card = e.target.closest('.card');
    
    // Cambia el texto del botón a "Agregado al carrito"
    button.innerText = 'Agregado al carrito';
    
    // Agrega la clase "added" a la card
    card.classList.add('added');
  });
});