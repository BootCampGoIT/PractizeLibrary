import modal from "../modal/modal";
import authForm from "../auth/authForm/authForm";

const header = () => {
  const navigationList = document.querySelector('.navigationList'); //ul
  const userProfile = document.querySelector('.userProfile');//div
  const userName = document.querySelector('.userName'); //span
  const pageName = document.querySelector('.pageName'); //p

  const currentActiveLink = navigationList.querySelector('.activeNavLink');
  pageName.textContent = currentActiveLink.dataset.page;


  const setActiveLink = (event) => {
    if (event.target.nodeName === "A") {
      const currentActiveLink = navigationList.querySelector('.activeNavLink');
      currentActiveLink && currentActiveLink.classList.remove('activeNavLink');
      event.target.classList.add('activeNavLink');
      pageName.textContent = event.target.dataset.page;
    }

    // if (event.target.dataset.page === 'login') {
    //   event.target.textContent = 'Log out'.toUpperCase();
    //   event.target.dataset.page = 'logout';
    //   setActiveUser();
    // } else if (event.target.dataset.page === 'logout') {
    //   event.target.textContent = 'Login'.toUpperCase();
    //   event.target.dataset.page = 'login';
    //   setActiveUser();
    // }
    if (event.target.dataset.page === 'login') {
      modal(authForm());
    }
    if (event.target.dataset.page === 'news') {
      modal('hello');
    }


  }

  const setActiveUser = () => {
    userProfile.classList.toggle('activeProfile');
    // if (userName.textContent !== 'Andrii') {
    //     userName.textContent = 'Andrii';
    // } else userName.textContent = 'Guest';
    (userName.textContent !== 'Andrii') ? userName.textContent = 'Andrii' : userName.textContent = 'Guest';
  }

  navigationList.addEventListener('click', setActiveLink); //ul
  userProfile.addEventListener('click', setActiveUser); //div

}


export default header;
