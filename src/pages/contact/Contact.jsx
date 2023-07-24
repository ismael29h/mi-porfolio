import { useState } from 'react';

import misDatos from '../../assets/misdatos.json';

import css from './Contact.module.css';

// SECCIÓN DE CONTACTO
export default function Contact() {
    // VERIFICACIONES BÁSICAS DE DATOS
    const [email, setEmail] = useState('');
    const [formState, setFormState] = useState({
        Nombre: false,
        Mensaje: false,
    });

    const isFormValid = () => {
        return Object.values(formState).every(Boolean);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value !== '' }));
    };

    const isEmailValid = () => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    };

    return (
        <form
            action={misDatos.personal.formsubmit}
            method='POST'
            className={css.formulario}
        >
            {/* PLATAFORMA BACKEND UTILIZADA: https://formsubmit.co/ */}
            <fieldset className={css.contacto}>
                <legend>¡Gracias por comunicarte!</legend>
                <label htmlFor='name'>
                    Nombre:
                    <input
                        id='name'
                        name='Nombre'
                        type='text'
                        placeholder='Ingrese su nombre'
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor='email'>
                    E-Mail:
                    <input
                        id='email'
                        name='Correo-E'
                        type='email'
                        placeholder='Ingrese su e-mail'
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor='message'>
                    Mensaje:
                    <br />
                    <textarea
                        id='message'
                        name='Mensaje'
                        type='message'
                        placeholder='Ingrese su mensaje'
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor='submit'>
                    <input
                        id='submit'
                        name='submit'
                        type='submit'
                        value='Enviar'
                        disabled={!isFormValid() || !isEmailValid()}
                    />
                </label>
            </fieldset>
            {/* CONFIGURACIONES DE FORMSUBMIT */}
            <input type='hidden' name='_captcha' value='false' />
            <input
                type='hidden'
                name='_subject'
                value='Mensaje desde mi Porfolio Personal'
            />
            <input type='hidden' name='_template' value='table'></input>
            <input
                type='hidden'
                name='_next'
                value={`${misDatos.linkPorfolio}/contacto`}
            ></input>
        </form>
    );
}
