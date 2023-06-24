import Calculator from '../../components/calculator/Calculator.jsx';
import Clock from '../../components/clock/Clock.jsx';
import Drum from '../../components/drum/Drum.jsx';
import Machine from '../../components/machine/Machine.jsx';
import Markdown from '../../components/markdown/Markdown.jsx';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import css from './Projects.module.css';
/**
            <Calculator />
            <Clock />
            <Drum />
            <Machine />
            <Markdown />
 */
// mover luego a constantes
const JOBS = [
    {
        site: 'Deserunt nisi minim aliqua',
        projects: [
            {
                name: 'Laborum nulla irure magna',
                desc: 'Lorem mollit pariatur aliqua sunt mollit fugiat.Est exercitation eu enim exercitation nulla fugiat consequat tempor adipisicing anim quis est incididunt esse. Sunt adipisicing eu ipsum voluptate aliqua mollit. Velit Lorem sint consequat tempor officia culpa velit occaecat laboris laborum dolor. Reprehenderit anim ex adipisicing velit laborum velit dolore esse.',
                link_code: 'http:Excepteur ad pariatur quis anim',
                link_iframe: 'Ad veniam fugiat consequat nostrud do.',
            },
            {
                name: 'Laborum nulla irure magna2',
                desc: 'Lorem mollit pariatur aliqua sunt mollit fugiat.2Ex reprehenderit et sit ut cillum sunt adipisicing et elit do adipisicing. Dolor exercitation ex qui do ipsum ex veniam. Mollit amet et dolor esse aute. Cillum cupidatat sunt labore Lorem cupidatat do eiusmod reprehenderit aute anim laboris Lorem cillum fugiat. Officia fugiat quis id elit nulla proident aute non labore culpa ex ut.',
                link_code: 'http:Excepteur ad pariatur quis anim2',
                link_iframe: 'Ad veniam fugiat consequat nostrud do.2',
            },
        ],
    },
    {
        site: 'Deserunt nisi minim aliqua',
        projects: [
            {
                name: 'Laborum nulla irure magna',
                desc: 'Lorem mollit pariatur aliqua sunt mollit fugiat.Tempor in reprehenderit eu ea do laborum excepteur et adipisicing nisi adipisicing. Ipsum aliqua sunt irure irure qui in. Sit et excepteur in ea fugiat. Minim ea dolor amet veniam nostrud laboris esse culpa ad dolor. Duis quis ea quis non minim reprehenderit consectetur consequat laborum nisi cillum sunt.',
                link_code: 'http:Excepteur ad pariatur quis anim',
                link_iframe: 'Ad veniam fugiat consequat nostrud do.',
            },
            {
                name: 'Laborum nulla irure magna2',
                desc: 'Lorem mollit pariatur aliqua sunt mollit fugiat.2Commodo consequat occaecat tempor incididunt quis laboris do. Elit occaecat non aliquip proident consectetur. Enim sit cillum est occaecat consequat veniam enim deserunt. Ullamco et enim Lorem proident velit esse amet quis officia enim duis aute sint. Est minim nisi officia ullamco ex qui proident.',
                link_code: 'https://codepen.io/ismael29h',
                link_iframe: <Calculator />,
            },
        ],
    },
];

export default function Projects() {
    return (
        <div className={css.allProjects}>
            {JOBS.map((job, index) => (
                <div key={index} className={css.job}>
                    <h2>{job.site}</h2>
                    {job.projects.map((project, indexProject) => (
                        <div key={indexProject} className={css.project}>
                            <h3>
                                {project.name}
                                <a
                                    href={project.link_code}
                                    target={'_blank'}
                                    rel='noreferrer'
                                >
                                    <OpenInNewIcon
                                        sx={{
                                            height: '1.2rem',
                                            margin: '0 0 0 15',
                                            border: '1px solid black',
                                        }}
                                    />
                                </a>
                            </h3>
                            <p>{project.desc}</p>
                            {project.link_iframe}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
