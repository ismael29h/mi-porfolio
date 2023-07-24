import css from './Projects.module.css';

import misDatos from '../../assets/misdatos.json';
import CodePen from '../../components/codepen/CodePen.jsx';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// PEQUEÑOS PROYECTOS PROPIOS
export default function Projects() {
    return (
        <div className={css.allProjects}>
            {misDatos.projects.map((job, index) => (
                <div key={index} className={css.job}>
                    {/* LUGAR O INSTITUCIÓN AL CUÁL PERTENECE */}
                    <h2>{job.site}</h2>
                    {job.projects.map((project, indexProject) => (
                        <div key={indexProject} className={css.project}>
                            <h3>
                                {/* TITULO DEL PROYECTO */}
                                {project.name}
                                {/* ENLACE A REPOSITORIO */}
                                <a
                                    href={project.linkCode}
                                    target={'_blank'}
                                    rel='noreferrer'
                                >
                                    <OpenInNewIcon
                                        sx={{
                                            height: '1.1rem',
                                            margin: '0 0 0 15',
                                            color: 'black',
                                        }}
                                    />
                                </a>
                            </h3>
                            {/* BREVE DESCRIPCIÓN DEL PROYECTO */}
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: project.desc.replace(
                                        /\n/g,
                                        '<br />'
                                    ),
                                }}
                            ></p>
                            {/* VISTA PREVIA DE CODEPEN (ignora pantallas pequeñas) */}
                            {project.preview === 'CodePen' && (
                                <Accordion
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
                                        bgcolor: '#86868b',
                                        color: '#131313',
                                        width: '100%',
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls='panel1a-content'
                                        id='panel1a-header'
                                    >
                                        Mostrar...
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {CodePen(
                                            project.name,
                                            project.linkCode
                                        )}
                                    </AccordionDetails>
                                </Accordion>
                            )}
                            {/* ENLACE EXTERNO AL PROYECTO DESPLEGADO */}
                            {/^http/.test(project.preview) && (
                                <a
                                    href={project.preview}
                                    target={'_blank'}
                                    rel='noreferrer'
                                    className={css.deploy}
                                >
                                    Muestra
                                    <OpenInNewIcon
                                        sx={{
                                            height: '1rem',
                                            margin: '0 0 0 15',
                                            color: 'black',
                                        }}
                                    />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
