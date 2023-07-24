import css from './Error404.module.css';

export default function Error404() {
    return (
        <div className={css.errorCaja}>
            <h2>ERROR 404</h2>
            <img src='/images/error404/marge.gif' />
        </div>
    );
}
