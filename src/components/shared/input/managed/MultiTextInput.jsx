import React, { useState } from 'react';
import { TextField, Chip, Box } from '@mui/material';

export const MultiTextInput = styled(
  ({
  name,
  form
}) => {
  const { control, setValue, trigger } = form;

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      const itemList = [...items, inputValue.trim()]
      setValue(name, itemList)
      setItems(itemList);
      setInputValue('');
    }
  };

  const handleDelete = (itemToDelete) => {
    const itemList = items.filter(item => item !== itemToDelete);
    setValue(name, itemList)
    setItems(itemList);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <TextField
        fullWidth
        label="Add item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {items.map((item, index) => (
          <Chip
            key={index}
            label={item}
            onDelete={() => handleDelete(item)}
            variant="outlined"
          />
        ))}
      </Box>
    </Box>
  );
});

export default MultiTextInput;

