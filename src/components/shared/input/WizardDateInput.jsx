/**
 * Copyright (C) 2019 European Spallation Source ERIC.
 * <p>
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * <p>
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * <p>
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */

import { useState } from "react";
import {
  Button,
  DialogActions,
  IconButton,
  InputAdornment,
  TextField,
  styled
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useController } from "react-hook-form";
import { DateTimePicker, pickersLayoutClasses } from "@mui/x-date-pickers";
import { useLocaleText } from "@mui/x-date-pickers/internals";
import moment from "moment";
import { GlobalStyles } from '@mui/material';

const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const DATE_FORMAT = "YYYY-MM-DD HH:mm";

const CustomActionBar = ({
  onAccept,
  onCancel,
  onSetToday,
  actions,
  className,
  ownerState
}) => {
  const localeText = useLocaleText();

  if (actions == null || actions.length === 0) {
    return null;
  }

  const buttons = actions?.map((actionType) => {
    switch (actionType) {
      case "cancel":
        return (
          <Button
            onClick={onCancel}
            key={actionType}
            variant="contained"
            color="secondary"
          >
            {localeText.cancelButtonLabel}
          </Button>
        );

      case "accept":
        return (
          <Button
            onClick={onAccept}
            key={actionType}
            variant="contained"
          >
            {localeText.okButtonLabel}
          </Button>
        );

      case "today":
        return (
          <Button
            onClick={onSetToday}
            key={actionType}
            variant="contained"
            color="secondary"
          >
            Now
          </Button>
        );

      default:
        return null;
    }
  });

  return (
    <DialogActions
      className={className}
      ownerState={ownerState}
    >
      {buttons}
    </DialogActions>
  );
};

const ButtonField = ({
  setOpen,
  id,
  disabled,
  InputProps: { ref } = {},
  inputProps: { "aria-label": ariaLabel } = {}
}) => {
  return (
    <IconButton
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      <CalendarMonthIcon
        sx={{ width: "1.4rem", height: "1.4rem" }}
        color={disabled ? "disabled" : "secondary"}
      />
    </IconButton>
  );
};

export const ButtonDatePicker = ({
  value,
  slots,
  ButtonFieldProps,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return [(
    <> { dark && <style>{` 
	.MuiDayCalendar-weekDayLabel {
  	  color: white !important;
	  font-weight: bold;
	}
	.MuiPickersDay-root.Mui-disabled {
	  color: #aaaaaa !important;
	  opacity: 1 !important;
	}
	.MuiPickersArrowSwitcher-button .MuiSvgIcon-root {
	  color: #a1a1a1 !important;
	}
	.MuiPickersToolbar-penIconButton .MuiSvgIcon-root {
	  color: #a1a1a1 !important;
	}
	.MuiClockPicker-root .MuiSvgIcon-root {
	  color: #a1a1a1 !important;
	}
	.MuiPickersToolbarButton-root .MuiSvgIcon-root {
	  color: #a1a1a1 !important;
	}
	.MuiPickersCalendarHeader-root .MuiIconButton-root .MuiSvgIcon-root {
	  color: #a1a1a1 !important;
	}
	.MuiPickersYear-yearButton.Mui-disabled {
          color: #aaaaaa !important;
  	  opacity: 1 !important;
	}
	    `} </style>      }
    <DateTimePicker
      sx={{
	    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'ologCalender.main' },
	    '&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'ologDarkLine.main'},
      }}
      value={value ? moment(value) : null}
      slots={{
        field: ButtonField,
        actionBar: CustomActionBar,
        ...slots
      }}
      slotProps={{
        field: { setOpen, ...ButtonFieldProps },
        actionBar: {
          actions: ["today", "cancel", "accept"]
        },
        layout: {
          sx: {
            [`.${pickersLayoutClasses.actionBar}`]: {
              "button:first-of-type": {
                marginRight: "auto"
              }
            }
          }
        },
	textField: {
	  sx: {'& .MuiInputBase-root': { backgroundColor: '#ologCalender.main'},
      },
    },

      }}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      format={DATE_FORMAT}
      ampm={false}
      disableFuture
      {...props}
    />
    </>
  )];
};

const WizardDateInput = styled(
  ({
    name,
    label,
    form,
    rules,
    defaultValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange,
    DatePickerProps,
    applyFilters,
    ...props
  }) => {
    const { control, setValue, trigger } = form;
    const {
      field: { ...field },
      fieldState
    } = useController({ name, control, rules, defaultValue });

    const onAccept = (momentDate) => {
      if (momentDate) {
        setValue(name, momentDate.format(DATE_FORMAT), {
          shouldValidate: true
        });
        trigger(name === "start" ? "end" : "start");
        applyFilters();
      }
    };

    return (
      <TextField
        id={name}
        label={label}
        helperText={fieldState?.error?.message}
        error={fieldState?.error}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <ButtonDatePicker
                value={field.value ?? null}
                onAccept={onAccept}
                ButtonFieldProps={{
                  inputProps: {
                    "aria-label": `Select Absolute ${label ?? "Date/Time"}`
                  }
                }}
                {...DatePickerProps}
              />
            </InputAdornment>
          )
        }}
        {...field}
        value={field.value ?? ""}
        sx={{
          "& .MuiFormLabel-root": {
            fontSize: ".9rem",
            top: "-4px"
          },
          "& .MuiInputLabel-shrink": { top: "0" },
          "& .MuiInputBase-input": { padding: "12.5px 15px", fontSize: ".9rem", color: 'ologBlack.main' }, 
	  "& .MuiOutlinedInput-notchedOutline": { borderColor: "ologLine.main" },
  	  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { borderColor: "ologDarkLine.main" },
  	  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "primary.main" },
  	  "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" } 
	}}
        {...props}
      />
    );
  }
)({});

export default WizardDateInput;
