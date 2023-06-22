import Home from '../pages/home/Home.jsx';
import Skills from '../pages/skills/Skills.jsx';
import Projects from '../pages/projects/Projects.jsx';
import Error404 from '../pages/error404/Error404.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />,
    },
    {
        path: '/inicio',
        element: <Home />,
    },
    {
        path: '/habilidades',
        element: <Skills />,
    },
    {
        path: '/proyectos',
        element: <Projects />,
    },
]);

export default function Root() {
    return <RouterProvider router={router} />;
}
