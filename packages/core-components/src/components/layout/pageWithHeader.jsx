import React from 'react';
import { Route, Routes, Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { AppBar, Tabs, Tab, Container, Typography } from '@mui/material';
import {theme} from '@catcode/theme'


const PageWithHeader = ({pages}) => {
  const location = useLocation();

  // Function to handle header item click
  const handleItemClick = (path) => {
    <Navigate to={path}/>;
  };

  return (
    <div>
      {/* Header */}
      <AppBar 
      position="static"
      style={{backgroundColor: theme.palette.primary.contrastText}}
      >
        <Tabs value={location.pathname}>
          {pages.map((page) => (
            <Tab
              key={page.url}
              label={page.name}
              value={page.url}
              component={Link}
              to={page.url} // Concatenate base path with relative path
              onClick={() => handleItemClick(page.url)} 
            />
          ))}
        </Tabs>
      </AppBar>

      {/* Page Content */}
      <Routes>
        {/* Generate routes dynamically */}
        {pages.map((page) => (
          <Route key={page.url} path={page.url} element={page.component} />
        ))}
      </Routes>
    </div>
  );
};


export default PageWithHeader;
