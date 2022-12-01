import React from 'react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import classes from './RegisterForm.scss';
import PhoneInput from 'react-phone-number-input/input';

function ContactForm() {
    const [login, setLogin] = useState('');
    const handleChangeLog = event => {
      const result = event.target.value.replace(/[^a-z]/gi, '');
  
      setLogin(result);
    };
    const [Password, setMessagePas] = useState('');
    const handleChangePass = event => {
      const result = event.target.value.replace(/[^a-z]/gi, '');
  
      setMessagePas(result);
    };
  
    const [value, setValue] = useState();

    if (state.succeeded) {
      return <p className={classes.Thanking}>Ooops something gone wrong...</p>;
    }
    return (
        <form className={classes.FormContainer} >
    
          <input
            className={classes.Name}
            placeholder="Login"
            id="Login"
            type="text"
            name="Login"
            value={login}
            onChange={handleChangeLog}
          />
          <input
            placeholder="Hasło"
            id="Hasło"
            type="text"
            name="Hasło"
            value={Password}
            onChange={handleChangePass}
          />
    
          <input
            placeholder="Adres E-mail"
            id="email"
            type="email"
            name="email"
          />
      
          <PhoneInput
          placeholder="Telefon"
            id="Telefon"
            type="Telefon"
            name="Telefon"
          country="PL"
          value={value}
          onChange={setValue} />
    
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={'some'.errors}
          />

             
            <input type="checkbox">
            <label for="myCheck">Oświadczam, że zapoznałem się z regulaminem strony</label>

          <button className={classes.btn_contact}>
            Zapisz
          </button>
        </form>
      );
    }
    export default RegisterForm;