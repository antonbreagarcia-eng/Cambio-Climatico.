// Recurso 1: Campo de texto que cambia el contenido
const userInput = document.getElementById('user-message');
const updateBtn = document.getElementById('update-btn');
const displayMessage = document.getElementById('display-message');

updateBtn.addEventListener('click', function() {
    const message = userInput.value.trim();
    
    if (message === '') {
        displayMessage.textContent = 'Por favor, escribe un mensaje primero.';
        displayMessage.style.color = '#e74c3c';
    } else {
        displayMessage.textContent = `Tu aporte: "${message}"`;
        displayMessage.style.color = '#2a5298';
        userInput.value = '';
    }
});

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        updateBtn.click();
    }
});

// Recurso 2: Intercambio de imágenes al hacer clic
const toggleImage = document.getElementById('toggle-image');
let imageState = true;

const image1 = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600';
const image2 = 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600';

toggleImage.addEventListener('click', function() {
    if (imageState) {
        toggleImage.src = image2;
        toggleImage.alt = 'Impacto del cambio climático';
    } else {
        toggleImage.src = image1;
        toggleImage.alt = 'Naturaleza saludable';
    }
    imageState = !imageState;
});

// Recurso 3: Objeto en movimiento
const movingObject = document.getElementById('moving-object');
const container = document.querySelector('.animation-container');

let position = 0;
let direction = 1;
const speed = 2;

function animate() {
    const containerWidth = container.offsetWidth;
    const objectWidth = movingObject.offsetWidth;
    const maxPosition = containerWidth - objectWidth;
    
    position += speed * direction;
    
    if (position >= maxPosition) {
        direction = -1;
    } else if (position <= 0) {
        direction = 1;
    }
    
    movingObject.style.left = position + 'px';
    
    requestAnimationFrame(animate);
}

animate();
