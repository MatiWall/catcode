import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const links = [
    { text: 'Home', path: '/' },
    { text: 'Catalog', path: '/catalog' },
];

const Sidebar = ({links}) => {


    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {links.map((link, index) => (
                        <ListItem key={index} button component={Link} to={link.path}>
                            <ListItemText primary={link.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
