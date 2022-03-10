import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function ControllableStates({selectOptions , Label , SX ,defalultValue=0}) {
  const [options, setOptions] = React.useState(['1', "2"]);
  const [value, setValue] = React.useState(defalultValue);
  const [inputValue, setInputValue] = React.useState(defalultValue);

  React.useEffect(()=>
  {
    setOptions(()=>selectOptions);
  })
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options?options : ['1' , "2"]}
        sx={{ width: 300 , ...SX}}
        renderInput={(params) => <TextField  {...params} label={Label} />}
      />
    </div>
  );
}
