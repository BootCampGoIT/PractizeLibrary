import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = {
  modalBTN: document.querySelector('.modalButton')
}
console.log(refs)

const template = document.querySelector('template');
console.log(template)

const modal = basicLightbox.create(template);

const modalHandler = () => {
  modal.show()
}
refs.modalBTN.addEventListener('click', modalHandler);

