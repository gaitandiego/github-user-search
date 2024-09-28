import { useState } from 'react'

import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import ImageLogo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
    const [openNav, setOpenNav] = useState(false)

    const handleNavMenu = (data) => {
        setOpenNav(data);
    };


    return (
        <AppBar position="fixed" className='menu'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex', flexGrow: 1 } }}>
                        <img
                            src={ImageLogo}
                            alt="logo"
                            loading="lazy"
                            className='image-logo'
                        />
                    </Box>

                    {/* Mobile */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <img
                            src={ImageLogo}
                            alt="logo"
                            loading="lazy"
                            className='image-logo'
                        />
                    </Box>

                    <Box role="presentation" sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-haspopup="true"
                            onClick={() => handleNavMenu(true)}
                            className='menu-icon'
                            edge="end"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    {/* Mobile */}

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => handleNavMenu(false)}
                            sx={{ my: 2, display: 'block' }}
                            className='menu-links'
                        >
                            Inicio
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
            <Drawer open={openNav} onClose={() => handleNavMenu(false)} >
                <Box sx={{ width: 250 }} role="presentation" onClick={() => handleNavMenu(false)}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faHome} />
                                </ListItemIcon>
                                <ListItemText primary="Inicio" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </AppBar >
    )
}

export default Header