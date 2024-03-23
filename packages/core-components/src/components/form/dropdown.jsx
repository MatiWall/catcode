import {useState} from 'react';

import { 
    Select, 
    FormControl, 
    MenuItem,
    Typography
} from '@mui/material';

const DropDown = ({ options, value, onChange, label }) => {
    
    const [_value, setValue] = useState(value);
    const handleChange = (event) => {
        
      const {
        target: { value },
      } = event;
      
      setValue(value);
      if (onChange){
        onChange(value);
      }
    };
  
    return (
      <FormControl fullWidth>
        <Typography>{label}</Typography>
        <Select 
        value={_value} 
        onChange={handleChange}
        >
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  export default DropDown;