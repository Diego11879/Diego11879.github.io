const photos = document.querySelectorAll('.photo');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');

let currentIndex = 0;

// Abre el modal con la foto seleccionada
function openModal(index) {
  const selectedPhoto = photos[index];
  const imgSrc = selectedPhoto.querySelector('img').src;
  const text = selectedPhoto.dataset.text;

  modalImage.src = imgSrc;
  modalDescription.textContent = text;

  modal.classList.remove('hidden');
  currentIndex = index;
}

// Cierra el modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Navegar a la foto anterior
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  openModal(currentIndex);
});

// Navegar a la siguiente foto
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  openModal(currentIndex);
});

// Configura el evento de clic en cada foto
photos.forEach((photo, index) => {
  photo.addEventListener('click', () => openModal(index));
});
