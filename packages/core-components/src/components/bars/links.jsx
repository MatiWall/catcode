import React from 'react';
import Paper from '@mui/material/Paper';



const LinkBar = ({links}) => {


    return (
        <Paper>
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                >
                    {link.icon}
                </a>
            ))}
        </Paper>
    );
};

export default LinkBar;
