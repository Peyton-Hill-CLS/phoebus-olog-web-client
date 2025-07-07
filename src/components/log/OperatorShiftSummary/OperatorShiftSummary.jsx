
import React from 'react';
import { Box, Typography, Grid, Checkbox, FormControlLabel, Paper } from '@mui/material';

const OperatorShiftSummary = () => {
  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Operator Shift Summary and Transfer
      </Typography>

      <Box mb={3}>
        <Typography variant="h6">Outgoing Operators</Typography>
        <Typography>Operator A: Ben S.</Typography>
        <Typography>Operator B: Emma P.</Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6">Incoming Operators and Certifications</Typography>
        <Typography>Operator A: Rukma S. K. (Op., FC, D-Shift)</Typography>
        <Typography>Operator B: Thomas M. (Op., FC, D-Shift)</Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6">Incoming Shift Type(s)</Typography>
        <FormControlLabel control={<Checkbox />} label="N" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="D" />
        <FormControlLabel control={<Checkbox />} label="M" />
      </Box>

      <Box>
        <Typography variant="h6">Crossover Wiki</Typography>
        <Typography>Updated?</Typography>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Outgoing Op. A" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Outgoing Op. B" />
        <Typography>Checked?</Typography>
        <FormControlLabel control={<Checkbox />} label="Incoming Op. A" />
        <FormControlLabel control={<Checkbox />} label="Incoming Op. B" />
      </Box>
    </Paper>
  );
};

export default ShiftSummary;
