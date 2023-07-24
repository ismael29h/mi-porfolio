import css from './Footer.module.css';
import misDatos from '../../assets/misdatos.json';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// FOOTER
export default function Footer() {
    return (
        <div className={css.creditos}>
            <div className={css.contacto}>
                <a
                    href={misDatos.personal.linkedin}
                    target='_blank'
                    rel='noreferrer'
                >
                    <LinkedInIcon />
                </a>
                <a
                    href={misDatos.personal.github}
                    target='_blank'
                    rel='noreferrer'
                >
                    <GitHubIcon />
                </a>
                <a href={`mailto:${misDatos.personal.email}`}>
                    <EmailIcon />
                </a>
            </div>
            <p
                className={css.derechos}
            >{`© 2023 ${misDatos.personal.names}`}</p>
        </div>
    );
}
