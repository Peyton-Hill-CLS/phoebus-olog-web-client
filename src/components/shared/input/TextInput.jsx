import { useController } from "react-hook-form";
import { TextField, styled } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

export const TextInput = styled(
  ({ name, label, control, rules, defaultValue, ...props }) => {
    const {
      field: { ...field },
      fieldState
    } = useController({ name, control, rules, defaultValue });

    return (
      <TextField
        id={name}
        label={label}
        helperText={fieldState?.error?.message}
        error={Boolean(fieldState?.error)}
        inputRef={field.ref}
        sx={{
          "& .MuiFormLabel-root": {
            fontSize: ".9rem",
            top: "-4px"
          },
          input: { color: 'red' },
          "& .MuiInputLabel-shrink": { top: 0 },
          "& .MuiInputBase-input": { padding: "12.5px 15px", fontSize: ".9rem", color: 'ologBlack.main' }, 
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "ologLine.main" },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { borderColor: "ologDarkLine.main" },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
          "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" }
        }}
        {...field}
        {...props}
      />
    );
  }
)({});

export default TextInput;
