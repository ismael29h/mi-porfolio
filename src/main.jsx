import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';

import Root from './routes/Root.jsx';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('header')).render(<Header />);

ReactDOM.createRoot(document.getElementById('main')).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('footer')).render(<Footer />);
