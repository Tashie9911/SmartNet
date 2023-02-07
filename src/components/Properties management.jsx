import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h3" gutterBottom>
         Register Your Properties
             </Typography>
        <TextField
          required
          id="standard-required"
          label="Property"
          defaultValue=""
          variant="standard"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Address"
          defaultValue=""
          variant="standard"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Location"
          defaultValue=""
          variant="standard"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Description"
          defaultValue=""
          variant="standard"
        />
      </div>
    </Box>
  );
}
