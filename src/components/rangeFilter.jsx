import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}$`;
}
const marks = [
    {
      value: 0,
      label: '0$',
    },
    {
      value: 20000,
      label: '20,000$',
    },
  ];
export default function RangeFilter({sx}) {
  const [value, setValue] = React.useState([0, 20000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 , ...sx , padding : "30px"}}>
        <p>
            Price :
        </p>
      <Slider 
        marks={marks}
        getAriaLabel={() => 'Price'}
        value={value}
        min={0}
        max={20000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
