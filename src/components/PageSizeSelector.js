import React from 'react';
import { TextField } from '@mui/material';

const PageSizeSelector = ({ pageSize, onChange }) => {
  const handlePageSizeChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <TextField
      label="Elementy na stronie"
      type="number"
      value={pageSize}
      onChange={handlePageSizeChange}
      InputProps={{ inputProps: { min: 1 } }}
    />
  );
};

export default PageSizeSelector;
