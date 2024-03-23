import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CssBaseline } from '@mui/material';

export default function NavBar({height}) {
    return (
        <AppBar position="absolute" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: height }}>
            <CssBaseline />
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit'  }}>
                    <Link to={`/`}>CatCode</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}