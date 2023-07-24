// PLANTILLA DE INCRUSTACIÓN DE CODEPEN
export default function CodePen(name, linkCode) {
    return (
        <iframe
            height='600'
            style={{ width: '100%' }}
            scrolling='no'
            title={name}
            src={`https://codepen.io/ismael29h/embed/preview/${
                linkCode.match(/\/([^/]+)$/)[1]
            }?default-tab=result`}
            frameBorder='no'
            loading='lazy'
            allowFullScreen={true}
        >
            See the Pen <a href={linkCode}>{name}</a> by Ismael (
            <a href='https://codepen.io/ismael29h'>@ismael29h</a>) on{' '}
            <a href='https://codepen.io'>CodePen</a>.
        </iframe>
    );
}
