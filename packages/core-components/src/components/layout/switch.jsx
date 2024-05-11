import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const handleItemClick = (path) => {
    
    return <Navigate to={path}/>;
  };


const RoutingSwitch = ({ children }) => {
    const location = useLocation();
    return (
            <Tabs value={location.pathname}>
                {children}
            </Tabs>
    );
};

const Item = ({ label, value, active=true }) => {
    const fullPath = useLocation().pathname +'/'+ value;
    return (
        active && (
        <Tab
            label={label}
            value={fullPath}
            component={Link}
            to={value}
            onClick={() => handleItemClick(value)} 
        />)
        
    )
}

RoutingSwitch.Item = Item;

export default RoutingSwitch;
