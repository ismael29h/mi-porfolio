import { useState } from 'react';

import css from './Header.module.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import { PAGES } from '../../utils/constants.js';

const ICONS = {
    INICIO: <HomeIcon key='INICIO' />,
    HABILIDADES: <BuildIcon key='HABILIDADES' />,
    PROYECTOS: <WorkIcon key='PROYECTOS' />,
    CONTACTO: <ContactMailIcon key='CONTACTO' />,
};

// HEADER RESPONSIVO
export default function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth='xl' sx={{ bgcolor: '#2b2b2b' }}>
                <Toolbar disableGutters sx={{ color: '#1561f0' }}>
                    <TerminalIcon
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                        }}
                    />
                    <Typography
                        variant='h6'
                        noWrap
                        component='h1'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: '220%',
                        }}
                    >
                        PORFOLIO PERSONAL
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {PAGES.map(page => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign='center'>
                                        <a href={`/${page.toLowerCase()}`}>
                                            {page}
                                        </a>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <a href='/inicio'>
                        <TerminalIcon
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                mr: 1,
                                transform: 'scale(1.2)',
                            }}
                        />
                    </a>
                    <Typography
                        variant='h5'
                        component='h1'
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            marginLeft: '15px',
                        }}
                    >
                        <a href='/inicio' className={css.title}>
                            PORFOLIO
                        </a>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'space-evenly',
                        }}
                    >
                        {PAGES.map(page => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                href={`/${page.toLowerCase()}`}
                                sx={{
                                    my: 2,
                                    display: 'flex',
                                    fontSize: '110%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                {[ICONS[page], page]}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
