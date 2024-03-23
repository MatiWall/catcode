import {useState, useEffect} from 'react';
import { 
    Select, 
    FormControl,
    MenuItem,
    Checkbox,
    ListItemText,
    Typography
} from '@mui/material';

const DropDownMulti = ({ 
    options, 
    value, 
    onChange, 
    label, 
    renderValue = (selected) => selected.join(', ')}) => {
    const [_value, setValue] = useState(value);
  
    const handleChange = (event) => {
      const { value: selectedValues } = event.target;
      setValue(selectedValues);
      onChange(selectedValues);
    };
  
    return (
      <FormControl fullWidth>
        <Typography>{label}</Typography>
        <Select
          multiple
          value={_value}
          onChange={handleChange}
          renderValue={renderValue}
        >
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              <Checkbox checked={_value.indexOf(item.value) > -1} />
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  export default DropDownMulti;