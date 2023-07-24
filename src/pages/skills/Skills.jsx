import { useState } from 'react';

import css from './Skills.module.css';

import misDatos from '../../assets/misdatos.json';

import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// CERTIFICADOS Y APTITUDES
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
            {/* CERTIFICADOS */}
            <div className={css.certificados}>
                <h2>CERTIFICADOS</h2>
                {misDatos.skills.map((certif, indice) => (
                    <Accordion
                        key={indice}
                        expanded={expanded === indice}
                        onChange={handleChange(indice)}
                        sx={{
                            bgcolor: '#86868b',
                            color: '#131313',
                            width: '100%',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${certif}a-content`}
                            id={`${indice}a-header`}
                        >
                            {/* TITULO DEL CERTIFICADO */}
                            <h3>{certif.name}</h3>
                        </AccordionSummary>
                        <AccordionDetails sx={{ textAlign: 'left' }}>
                            {/* DESCRIPCIÓN CORTA DEL CERTIFICADO */}
                            <p>{certif.info}</p>
                            <br />
                            {/* CAPTURA DEL CERTIFICADO */}
                            <div className={css.center}>
                                <Button onClick={handleOpen}>
                                    Mostrar...
                                    <OpenInNewIcon />
                                </Button>
                            </div>
                            <Backdrop
                                sx={{
                                    color: '#fff',
                                    zIndex: theme => theme.zIndex.drawer + 1,
                                }}
                                open={open}
                                onClick={handleClose}
                            >
                                <img
                                    src={`./images/certificates/${certif.image}`}
                                    alt={certif.name}
                                />
                            </Backdrop>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            {/* SIMPLE CONTENEDOR DE LOGOS */}
            <div className={css.aptitudes}>
                <h2>APTITUDES</h2>
                <ImageList gap={6} cols={3}>
                    {misDatos.logosAbility.map((imagen, indice) => (
                        <ImageListItem key={indice}>
                            <img
                                src={`./images/logos/${imagen}`}
                                alt='LOGO'
                                loading='lazy'
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
}
