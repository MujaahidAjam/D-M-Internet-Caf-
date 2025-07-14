// Simple lightbox for the showcase gallery
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  // build modal
  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="Enlarged image">
  `;
  document.body.append(modal);

  const modalImg = modal.querySelector('img');
  modal.querySelector('.lightbox-close')
       .addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
  });

  // attach click handlers
  gallery.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.dataset.full || img.src;
      modal.classList.add('open');
    });
  });
});
