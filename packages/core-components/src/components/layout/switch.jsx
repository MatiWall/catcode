import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const handleItemClick = (path) => {
    console.log(path)
    
    return <Navigate to={path}/>;
  };


const RoutingSwitch = ({ children }) => {
    const location = useLocation();
    console.log(location)
    return (
            <Tabs value={location.pathname}>
                {children}
            </Tabs>
    );
};

const SwitchItem = ({ label, value, active=true }) => {
    
    return (
        active && (
        <Tab
            label={label}
            value={value}
            component={Link}
            to={value}
            onClick={() => handleItemClick(value)} 
        />)
        
    )
}

export { RoutingSwitch, SwitchItem };
