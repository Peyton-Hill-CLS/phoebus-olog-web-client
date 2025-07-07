
import React from 'react';
import { Box, Typography, Grid, Checkbox, FormControlLabel } from '@mui/material';
import {
  Alert,
  Button,
  FormLabel,
  Stack,
  styled
} from "@mui/material";
import { TextInput } from "components/shared/input/TextInput";
import { ologApi } from "api/ologApi";
import { theme } from "src/config/theme";


const OperatorShiftSummary = ({control, disabled}) => {
        if(disabled) {
                return <Stack/>
        }
  return (
    <Stack  spacing={2} padding={2} sx={{  width: 1, border: `2px solid lightgray`, borderRadius: 1}}>
      <Typography variant="h5" gutterBottom>
        Operator Shift Summary and Transfer
      </Typography>


      <Box
          spacing={2}
          mb={0}
          sx={{ width: 1 }}
          >
        <Typography variant="h6">Outgoing Operators</Typography>
        <TextInput
          name="operator-a"
          label="Operator A:"
          control={control}
          sx= {{width: 1}}
          defaultValue=""/>

        <TextInput
          name="operator-b"
          label="Operator B:"
          sx={{width: 1}}
          control={control}
          defaultValue=""/>
      </Box>

      <Typography variant="h6">Incoming Operators and Certifications</Typography>
      <Box mb={0} alignItems="center" display="flex">

        <TextInput
          name="operator-a"
          label="Operator A:"
          control={control}
          sx= {{width: 1}}
          defaultValue=""/>

        <Box mb={0} alignItems="center" justifyContent="center" display="flex" sx={{width: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Op." sx={{width: 0.2}}/>
          <FormControlLabel control={<Checkbox defaultChecked />} label="FC" sx={{width: 0.2}}/>
          <FormControlLabel control={<Checkbox defaultChecked />} label="D-Shift" sx={{width: 0.2}}/>
        </Box>
      </Box>
       <Box mb={0} alignItems="center" display="flex">

        <TextInput
          name="operator-b"
          label="Operator B:"
          control={control}
          sx= {{width: 1}}
          defaultValue=""/>

        <Box mb={0} alignItems="center" justifyContent="center" display="flex" sx={{width: 0.5}}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Op." sx={{width: 0.2}}/>
          <FormControlLabel control={<Checkbox defaultChecked />} label="FC" sx={{width: 0.2}}/>
          <FormControlLabel control={<Checkbox defaultChecked />} label="D-Shift" sx={{width: 0.2}}/>
        </Box>
      </Box>


      <Box mb={0}>
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
    </Stack>
  );
};

export default OperatorShiftSummary;
