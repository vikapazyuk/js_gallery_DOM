const largeImg = document.querySelector('.gallery__large-img');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  let link;

  if (e.target.tagName === 'IMG') {
    link = e.target.closest('a');
  } else if (e.target.tagName === 'A') {
    link = e.target;
  }

  if (link) {
    largeImg.src = link.href;
  }
});
