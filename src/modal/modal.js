import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { getDataFromAuthForm } from '../auth/auth';

const modal = (authForm) => {
  const instance = basicLightbox.create(
    `<div class="modal">
    ${authForm}
    </div >
    `
  )
  instance.show();
  getDataFromAuthForm(instance.close);
}

export default modal;
