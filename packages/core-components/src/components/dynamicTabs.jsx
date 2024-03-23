import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';

const DynamicTabs = ({ tabData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
        {tabData.map((item, index) => (
          <Tab label={item.title} key={index} />
        ))}
      </Tabs>
      {tabData.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {item.component}
        </TabPanel>
      ))}
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{ width: '100%', height: '100%' }}
    >
      <Box p={3} style={{ display: value === index ? 'block' : 'none', height: '100%' }}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
};

export default DynamicTabs;
