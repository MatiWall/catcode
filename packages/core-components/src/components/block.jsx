import { Grid, Card, Paper } from '@mui/material';
import React from 'react';

const BaseCard = ({ children, style, width, height }) => {
    return (
            <Paper elevation={1} sx={{ borderRadius: '8px' }} style={{width: '100%', height: '100%'}}>
                <Card style={{ width, height, ...style }}>
                    {children}
                </Card>
            </Paper>
    );
};

export default BaseCard;
