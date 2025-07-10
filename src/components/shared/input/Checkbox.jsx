import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import { useController } from "react-hook-form";

export const Checkbox = ({ name, label, control, rules, onChange }) => {
  const {
    field: { ...field },
  } = useController({ name, control, rules, defaultValue:false});
  return (
    <FormControlLabel
      value="right"
      control={
        <MuiCheckbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 20 }, color: "ologIcon.main" }}
          {...field}
          checked={field.value}
          onChange={(e, value) => onChange(field, value)}
        />
      }
      label={label}
      sx={{ "& span": { fontSize: ".85rem" }, marginLeft: "0px" }}
    />
  );
};
