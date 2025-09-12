import React, { useState } from 'react';
import { TextField, Chip, Box, styled } from '@mui/material';

export const EmailTextInput = styled(
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
      // a beautiful internet regex that supposedly matches all compliant email addresses.
      const reg = /(?:[a-z0-9!#$%&'*+\x2f=?^_`\x7b-\x7d~\x2d]+(?:\.[a-z0-9!#$%&'*+\x2f=?^_`\x7b-\x7d~\x2d]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9\x2d]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\x2d]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9\x2d]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      if(!reg.test(inputValue.trim())) {
        //not an email.
        return;
      }
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
        label="Add Forwarding Email"
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2,
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
            color="ologBlack"
            size="small"
            sx={{
              flex: '1 1 calc(33.333% - 16px)', // 3 items per row, minus gap
              minWidth: '200px', // optional: prevents items from shrinking too much
              boxSizing: 'border-box',
              padding: 2,
              textAlign: 'center',
            }}
          />
        ))}
      </Box>
    </Box>
  );
})({});

export default EmailTextInput;

