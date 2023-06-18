import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root.jsx';
import './styles/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
]);

ReactDOM.createRoot(document.getElementById('main')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
