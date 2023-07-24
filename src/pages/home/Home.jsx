import css from './Home.module.css';

import misDatos from '../../assets/misdatos.json';

// PÁGINA INICIAL DE BIENVENIDA
export default function Home() {
    return (
        <div className={css.caja}>
            <div id='caja-avatar' className={css.avatar}>
                <img src='./images/avatar/avatar.png' alt='avatar' />
            </div>
            <div id='caja-presentacion' className={css.presentacion}>
                <h3>¡Bienvenido!</h3>
                <p
                    dangerouslySetInnerHTML={{
                        __html: misDatos.welcome.replace(/\n/g, '<br />'),
                    }}
                ></p>
            </div>
        </div>
    );
}
