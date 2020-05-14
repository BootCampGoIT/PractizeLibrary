export const getDataFromAuthForm = (closeModal) => {
  const authForm = document.forms.authForm;

  // const getUserData = (e) => {
  //   user[e.target.name] = e.target.value;
  //   console.log(user);
  // }

  const submitData = (e) => {
    e.preventDefault();
    const user = {
      login: '',
      email: '',
      password: ''
    }
    user.login = authForm.elements.login.value;
    user.email = authForm.elements.email.value;
    user.password = authForm.elements.password.value;
    authForm.removeEventListener('submit', submitData);
    closeModal();
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
  }

  // authForm.addEventListener('change', getUserData);
  authForm.addEventListener('submit', submitData);

};
