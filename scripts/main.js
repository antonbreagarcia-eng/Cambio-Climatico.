// Campo de texto
const userInput = document.getElementById('user-message');
const updateBtn = document.getElementById('update-btn');
const displayMessage = document.getElementById('display-message');

updateBtn.addEventListener('click', () => {
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

userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') updateBtn.click();
});

// Cambio de imágenes
const toggleImage = document.getElementById('toggle-image');
let imageState = true;

const image1 = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600';
const image2 = 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600';

toggleImage.addEventListener('click', () => {
    toggleImage.src = imageState ? image2 : image1;
    imageState = !imageState;
});

// Animación
const movingObject = document.getElementById('moving-object');
const container = document.querySelector('.animation-container');

let position = 0;
let direction = 1;

function animate() {
    const max = container.offsetWidth - movingObject.offsetWidth;
    position += 2 * direction;

    if (position >= max || position <= 0) direction *= -1;

    movingObject.style.left = position + 'px';
    requestAnimationFrame(animate);
}

animate();
