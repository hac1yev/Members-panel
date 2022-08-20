import React, { useState } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import classes from './SignIn.module.css';

const SignIn = () => {
  const [formFocus,setFormFocus] = useState(false); 
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsTouched,setEmailIsTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsTouched,setPasswordIsTouched] = useState(false);
  const history = useHistory();

  const enteredEmailIsValid = enteredEmail.includes('@mail.com') || 
  enteredEmail.includes('@gmail.com') || 
  enteredEmail.includes('@mail.ru');

  const enteredPasswordIsValid = enteredPassword.trim().length >= 6;

  const emailIsInvalid = !enteredEmailIsValid && emailIsTouched;
  const passwordIsInvalid = !enteredPasswordIsValid && passwordIsTouched;

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleEmail = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleEmailBlur = () => {
    setEmailIsTouched(true);
  };

  const handlePasswordBlur = () => {
    setPasswordIsTouched(true);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/homepage');
    localStorage.setItem('logged', true);
  };

  const handleFormFocus = () => {
    setFormFocus(true);
  };

  const handlePropmpt = () => {
    setFormFocus(false);
  };

  return (
    <>
      <Prompt 
        when={formFocus}
        message={(location) => 
          'Email və Şifrəni daxil etmeden sisteme daxil olmaq mümkün deyil!'
        }
      />
      <div className={classes.login}>
        <p className={classes['login-text']}>Daxil ol</p>
        <form onFocus={handleFormFocus} onSubmit={handleSubmit} className={classes['login-form']}>
          <div className={classes[emailIsInvalid ? 'invalid' : 'input-group']}>
            <label htmlFor="username">E-mail:</label>
            <input onBlur={handleEmailBlur} placeholder='Enter email' value={enteredEmail} onChange={handleEmail} type="email" id="username" />
            {emailIsInvalid && <p className={classes['error-text']}>Xaiş edirik düzgün e-mail daxil edin!(@gmail.com, @mail.com, @mail.ru)</p>}
          </div>
          <div className={classes[passwordIsInvalid ? 'invalid' : 'input-group']}>
            <label htmlFor="password">Şifrə:</label>
            <input onBlur={handlePasswordBlur} placeholder='Enter password' value={enteredPassword} onChange={handlePassword} type="password" id="password" />
            {passwordIsInvalid && <p className={classes['error-text']}>Şifrə ən az 6 xanadan ibarət olmalıdır!</p>}
          </div>
          <div className={classes['login-button']}>
            <button onClick={handlePropmpt} disabled={!formIsValid}>Daxil ol</button>
          </div>
        </form>
      </div>
    </>
    
  );
};

export default SignIn