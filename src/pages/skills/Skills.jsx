import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import css from './Skills.module.css';
import { ListItemSecondaryAction } from '@mui/material';

// INFORMACIÓN SOBRE CERTIFICADOS OBTENIDOS
const SKILLS = [
    {
        name: 'La ruta del desarrollador web',
        info: 'Certificado por EDteam',
        image: 'src/assets/images/certificates/1.png',
    },
    {
        name: 'Sit commodo Lorem',
        info: 'Laborum ex duis exercitation deserunt minim ad ipsum sint velit velit eiusmod.',
        image: 'src/assets/images/certificates/1.png',
    },
    {
        name: 'Consequat',
        info: 'Cupidatat commodo consequat adipisicing laborum non exercitation voluptate ullamco in aliquip laboris consequat irure.',
        image: 'src/assets/images/certificates/1.png',
    },
    {
        name: 'Do ut ut fugiat',
        info: 'Sunt ex non ad velit est adipisicing officia ut do excepteur ut excepteur.',
        image: 'src/assets/images/certificates/1.png',
    },
];

// RUTA A LOGOS DE APTITUDES
const LOGOS = [
    'src/assets/images/logos/css3.jpg',
    'src/assets/images/logos/html5.jpg',
    'src/assets/images/logos/javascript.jpg',
    'src/assets/images/logos/mysql.jpg',
    'src/assets/images/logos/python.jpg',
    'src/assets/images/logos/react.jpg',
];

export default function Skills() {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={css.habilidades}>
            <div className={css.certificados}>
                <h2>CERTIFICADOS</h2>
                {SKILLS.map((certif, indice) => (
                    <Accordion
                        key={indice}
                        expanded={expanded === indice}
                        onChange={handleChange(indice)}
                        sx={{
                            bgcolor: '#86868b',
                            color: '#131313',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${certif}a-content`}
                            id={`${indice}a-header`}
                        >
                            <h3>{certif.name}</h3>
                        </AccordionSummary>
                        <AccordionDetails sx={{ 'text-align': 'left' }}>
                            <p>
                                {certif.info}
                                <Button onClick={handleOpen}>
                                    <OpenInNewIcon />
                                </Button>
                            </p>

                            <Backdrop
                                sx={{
                                    color: '#fff',
                                    zIndex: theme => theme.zIndex.drawer + 1,
                                }}
                                open={open}
                                onClick={handleClose}
                            >
                                <img
                                    src={certif.image}
                                    alt={certif.name}
                                    width='300px'
                                    height='auto'
                                />
                            </Backdrop>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            <div className={css.aptitudes}>
                <h2>APTITUDES</h2>
                <ImageList sx={{ width: 500, height: 'auto' }} cols={3}>
                    {LOGOS.map((imagen, indice) => (
                        <ImageListItem key={indice}>
                            <img src={imagen} alt='LOGO' loading='lazy' />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
}
