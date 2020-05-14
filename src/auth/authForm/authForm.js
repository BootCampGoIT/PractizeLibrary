const authForm = () => {
  return `
  <form name='authForm'>
  <input class="login" name="login" type='text' placeholder="login"/>
  <input class="email" name="email" type='text' placeholder="email"/>
  <input class="password" name="password" type='password' placeholder="password"/>
  <button type="submit" class="authFormBTN">Login</button>
  </form>
  `
}

export default authForm;
