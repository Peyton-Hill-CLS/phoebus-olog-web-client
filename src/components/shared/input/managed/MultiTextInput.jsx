import React, { useState } from 'react';
import { TextField, Chip, Box, styled } from '@mui/material';

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
    <Box sx={{ width: '100%'}}>
      <TextField
        fullWidth
        label="Add item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          "& .MuiInputLabel-shrink": { top: 0 },
          "& .MuiInputBase-input": { padding: "12.5px 15px", fontSize: ".9rem", color: 'ologBlack.main' },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "ologLine.main" },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { borderColor: "ologDarkLine.main" },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
          "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" }
        }}
      />
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1,
          "& .MuiInputLabel-shrink": { top: 0 },
          "& .MuiInputBase-input": { padding: "12.5px 15px", fontSize: ".9rem", color: 'ologBlack.main' },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "ologLine.main" },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { borderColor: "ologDarkLine.main" },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
          "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" }
      }}>
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
})({});

export default MultiTextInput;

