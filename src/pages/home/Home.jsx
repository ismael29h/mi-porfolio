import css from './Home.module.css';

export default function Home() {
    return (
        <div className={css.caja}>
            <div id='caja-avatar' className={css.avatar}>
                <img src='src/assets/images/avatar/1.jpg' alt='avatar' />
            </div>
            <div id='caja-presentacion' className={css.presentacion}>
                <h3>Occaecat nisi mollit</h3>
                <p>
                    Laboris et id cupidatat ipsum occaecat ea quis reprehenderit
                    qui ut. Duis aliqua cillum occaecat sint cillum ullamco.
                    Fugiat consectetur officia culpa dolor magna. Eiusmod non
                    ipsum laborum nisi adipisicing pariatur Lorem est aute id
                    duis qui. Velit aute velit aute elit.
                </p>
            </div>
        </div>
    );
}
