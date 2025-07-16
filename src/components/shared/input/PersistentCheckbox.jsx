import { Checkbox as MuiCheckbox, InputLabel, Box, Typography, FormControlLabel } from "@mui/material";
import React, { useState, useEffect } from 'react';


export const PersistentCheckbox = ({ checked, setChecked, label, storage }) => {
  useEffect(() => {
    const saved = localStorage.getItem(storage);
    if (saved !== null) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  // Save state on change
  useEffect(() => {
    localStorage.setItem(storage, JSON.stringify(checked));
  }, [checked]);


  return (
    <Box display="flex"
         flexDirection="row"
         alignItems="center">
      <FormControlLabel sx={{ "& span": { fontSize: ".85rem" }, marginLeft: "0px" }}
        label={label}
	control={
	<MuiCheckbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 20 }, color: "ologIcon.main" }}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
	/>}
      />
    </Box>
  );
};
