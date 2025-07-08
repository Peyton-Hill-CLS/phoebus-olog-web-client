
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
  Alert,
  Button,
  FormLabel,
  Stack,
  styled
} from "@mui/material";
import { TextInput } from "components/shared/input/TextInput";
import { Checkbox } from "components/shared/input/Checkbox";
import { ologApi } from "api/ologApi";
import { theme } from "src/config/theme";


const ShiftSummaryToMD = function(formData) {
  let padding = "";
  for(var x = 0; x < 20; x++) {
    padding += "&nbsp;"
  }


    const str = `# Operator Shift Summary and Transfer
## Outgoing Operators
- **Operator A**: ${formData.summary_out_operator_a}
- **Operator B**: ${formData.summary_out_operator_b}

## Incoming Operators

| Operator ${padding}              | Certifications ${padding}                  |
|----------------------------------|:------------------------------------------:|
| **Operator A:** ${formData.summary_in_operator_a} | ${formData.summary_in_a_op ? "✓" : "☐"} Op.&nbsp;&nbsp; ${formData.summary_in_a_fc ? "✓" : "☐"} FC&nbsp;&nbsp; ${formData.summary_in_a_dshift ? "✓" : "☐"} D-Shift |
| **Operator B:** ${formData.summary_in_operator_b} | ${formData.summary_in_b_op ? "✓" : "☐"} Op.&nbsp;&nbsp; ${formData.summary_in_b_fc ? "✓" : "☐"} FC&nbsp;&nbsp; ${formData.summary_in_b_dshift ? "✓" : "☐"} D-Shift |

## Incoming Shift Type(s)
${formData.summary_N ? "✓" : "☐"} N &nbsp;&nbsp;&nbsp;&nbsp;${formData.summary_D ? "✓" : "☐"} D &nbsp;&nbsp;&nbsp;&nbsp;${formData.summary_M ? "✓" : "☐"} M

## Crossover Wiki

| Updated? ${padding}        | Checked? ${padding}      |
|:--------------------------:|:------------------------:|
| ${formData.summary_updated_a ? "✓" : "☐"} Outgoing Op. A     | ${formData.summary_checked_a ? "✓" : "☐"} Incoming Op. A   |
| ${formData.summary_updated_b ? "✓" : "☐"} Outgoing Op. B     | ${formData.summary_checked_b ? "✓" : "☐"} Incoming Op. B   |
## Other notes:
        `
    return str.split(/\r?\n/).map(line => line.trim()).join('\n');
};

const OperatorShiftSummary = ({control, disabled, form}) => {
        if(disabled) {
                return <Stack/>
        }
        const { watch, setValue } = form;
  return (
    <Stack  spacing={2} padding={2} sx={{  width: 1, border: `2px solid lightgray`, borderRadius: 1}}>
      <Typography variant="h5" gutterBottom>
        Operator Shift Summary and Transfer
      </Typography>


      <Stack
          spacing={2}
          mb={0}
          sx={{ width: 1 }}
          >
        <Typography variant="h6">Outgoing Operators</Typography>
        <TextInput
          form={form}
          name="summary_out_operator_a"
          label="Operator A:"
          control={control}
          sx= {{width: 1}}
          defaultValue=""/>

        <TextInput
          form={form}
          name="summary_out_operator_b"
          label="Operator B:"
          sx={{width: 1}}
          control={control}
          defaultValue=""/>
      </Stack>

      <Typography variant="h6">Incoming Operators and Certifications</Typography>
      <Box mb={0} alignItems="center" display="flex">

        <TextInput
          form={form}
          name="summary_in_operator_a"
          label="Operator A:"
          control={control}
          sx= {{width: 1}}
          defaultValue=""/>

        <Box mb={0} alignItems="center" justifyContent="center" display="flex" sx={{width: 0.5}}>
          <Checkbox
            form={form}
            name="summary_in_a_op"
            label="Op."
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
          <Checkbox
            form={form}
            name="summary_in_a_fc"
            label="FC"
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
          <Checkbox
            form={form}
            name="summary_in_a_dshift"
            label="D-Shift"
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
        </Box>
      </Box>
       <Box mb={0} alignItems="center" display="flex">

        <TextInput
          form={form}
          name="summary_in_operator_b"
          label="Operator B:"
          control={control}
          sx= {{width: 1}}
          defaultValue=""/>

        <Box mb={0} alignItems="center" justifyContent="center" display="flex" sx={{width: 0.5}}>
          <Checkbox
            form={form}
            name="summary_in_b_op"
            label="Op."
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
          <Checkbox
            form={form}
            name="summary_in_b_fc"
            label="FC"
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
          <Checkbox
            form={form}
            name="summary_in_b_dshift"
            label="D-Shift"
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
        </Box>
      </Box>


      <Box mb={0}>
        <Typography variant="h6">Incoming Shift Type(s)</Typography>
          <Checkbox
            form={form}
            name="summary_N"
            label="N"
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
          <Checkbox
            form={form}
            name="summary_D"
            label="D"
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
          <Checkbox
            form={form}
            name="summary_M"
            label="M"
            control={control}
            onChange={(e, a) => {setValue(e.name, a)}}
            sx={{width: 0.2}}
          />
      </Box>

      <Stack>
        <Typography variant="h6">Crossover Wiki</Typography>
        <Box alignItems="center" display="flex" sx={{width: 1}}>
          <Stack spacing={1} padding={1} sx={{  width: 0.5, border: `2px solid lightgray`, borderRadius: 1}} alignItems="center" justifyContent="center" display="flex">
            <Typography>Updated?</Typography>
            <Checkbox
              form={form}
              name="summary_updated_a"
              label="Outgoing Op. A"
              control={control}
              onChange={(e, a) => {setValue(e.name, a)}}
              sx={{width: 1}}
            />
            <Checkbox
              form={form}
              name="summary_updated_b"
              label="Outgoing Op. B"
              control={control}
              onChange={(e, a) => {setValue(e.name, a)}}
              sx={{width: 1}}
            />
          </Stack>
          <Stack spacing={1} padding={1} sx={{  width: 0.5, border: `2px solid lightgray`, borderRadius: 1}} alignItems="center" justifyContent="center" display="flex">
            <Typography>Checked?</Typography>
            <Checkbox
              form={form}
              name="summary_checked_a"
              label="Incoming Op. A"
              control={control}
              onChange={(e, a) => {setValue(e.name, a)}}
              sx={{width: 1}}
            />
            <Checkbox
              form={form}
              name="summary_checked_b"
              label="Incoming Op. B"
              control={control}
              onChange={(e, a) => {setValue(e.name, a)}}
              sx={{width: 1}}
            />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export {
        OperatorShiftSummary,
        ShiftSummaryToMD
};
