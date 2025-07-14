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

import { createTheme } from "@mui/material";

export let theme = createTheme({});

//const dark = false;
const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const colors = dark ? {
  "ologCyan": "#00709c",
  //"ologCyan": "#0080ac",
  //"ologCyan": "#00394c",
  "ologBlack": "#ffffff",
  "ologWhite": "#000000",
  "ologPurple": "#C254C2",
  "ologOrange": "#ff7d00",
  "ologForest": "#006646",
  "ologGrass": "#99be00",
  "ologNavy": "#003366",
  "ologRed": "#800000",

  "entryRoutine": "#ffffff",
  "entryFloorCoordinator": "#de2fc6",
  "entryInjectionStart": "#01a204",
  "entryInjectionEnd": "#0071b7",
  "entryBeamlinesEnabled": "#80c0ff",
  "entrySR1Trip": "#bb8900",
  "entryLINAC": "#008000",
  "entryTopUp": "#3355ff",
  "entryStartofShift": "#3b8674",
  "entryEndofShift": "#3b8674",
  "entryImportant": "#ff0000",
  "entryOnCallContact": "#ff0000",
  "entryBeamOff": "#ff8000",
  "entryZoneAccess": "#648444",
  "entryLockup": "#8040ff",
  "entryBypass": "#F5A608",
  "entryComment": "#3355ff",
  "entryShiftSummary": "#3355ff",
  "entryCommentsfromBeamlines": "#de2fc6",
  "entryMachineConfiguration": "#de2fc6",
  "entryMaintenance": "#ffffff",

  "ologHover": "#404444",
  "ologSelected": "#00394c",
  "ologLine" : "#404444",
  "ologNeutralGrey" : "#757575",
  "ologSpacer" : "#333333",
  "ologIcon" : "#A1A1A1",
  "ologLightLine": "#1C1C1C",
  "ologEntry": "#1a1d21",
  "ologNavbar": "#404244",
  "ologBackground": "#101214",
  "ologDarkLine": "#AAAAAA",
  "ologDisabled": "#FF6666",
  "ologCalender": "#404444"
} : {
  "ologCyan": "#0099dc",
  "ologBlack": "#000000",
  "ologWhite": "#ffffff",
  "ologPurple": "#821482",
  "ologOrange": "#ff7d00",
  "ologForest": "#006646",
  "ologGrass": "#99be00",
  "ologNavy": "#003366",
  "ologRed": "#800000",

  "entryRoutine": "#000000",
  "entryFloorCoordinator": "#de2fc6",
  "entryInjectionStart": "#01a204",
  "entryInjectionEnd": "#0071b7",
  "entryBeamlinesEnabled": "#80c0ff",
  "entrySR1Trip": "#bb8900",
  "entryLINAC": "#008000",
  "entryTopUp": "#3355ff",
  "entryStartofShift": "#3b8674",
  "entryEndofShift": "#3b8674",
  "entryImportant": "#ff0000",
  "entryOnCallContact": "#ff0000",
  "entryBeamOff": "#ff8000",
  "entryZoneAccess": "#648444",
  "entryLockup": "#8040ff",
  "entryBypass": "#F5A608",
  "entryComment": "#3355ff",
  "entryShiftSummary": "#3355ff",
  "entryCommentsfromBeamlines": "#de2fc6",
  "entryMachineConfiguration": "#de2fc6",
  "entryMaintenance": "#000000",

  "ologHover": "#ECF0F3",
  "ologSelected": "#0099dc24",
  "ologLine" : "#CACACA",
  "ologNeutralGrey" : "#757575",
  "ologSpacer" : "#CCCCCC",
  "ologIcon" : "#616161",
  "ologLightLine": "#F3F5F7",
  "ologEntry": "#fafafa",
  "ologNavbar": "#E2E8EE",
  "ologBackground": "#ffffff",
  "ologDarkLine": "#000000",
  "ologDisabled": "#DDDDDD",
  "ologCalender": "#FFFFFF"
}


const customPalette = Object.fromEntries(
  Object.entries(colors).map(([name, hex]) => [
    name,
    theme.palette.augmentColor({
      color: { main: hex },
      name,
    }),
  ])
);


theme = createTheme(theme, {
  palette: {
    ...customPalette,
  }});

theme = createTheme(theme, {
typography: {
    allVariants: {
      color: theme.palette.ologBlack.main
    },
  },
});

if(dark) {
  let grey = { ...theme.palette.grey};
  theme.palette.grey[900] = grey[100];
  theme.palette.grey[100] = grey[900];
  theme.palette.grey[800] = grey[200];
  theme.palette.grey[200] = grey[900];
  theme.palette.grey[700] = grey[300];
  theme.palette.grey[300] = grey[700];
  theme.palette.grey[600] = grey[400];
  theme.palette.grey[400] = grey[600];
}

// // Compose remaining overrides
theme = createTheme(theme, {
  palette: {
    primary: theme.palette.augmentColor({
      color: {
        main: theme.palette.ologCyan.main
      },
      name: "primary"
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: theme.palette.grey[700]
      },
      name: "secondary"
    }),
    text: theme.palette.augmentColor({
      color: {
        main: theme.palette.ologBlack.main
      },
      name: "text"
    }),
    status: {
      ok: theme.palette.success.main,
      progress: theme.palette.warning.light,
      fail: theme.palette.error.main
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline"
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.palette.ologLine.main, // Popup background
          color: theme.palette.ologDarkLine.main,           // Text color
        },
      },
    },
        MuiCalendarPicker: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e2f',
        },
      },
    },
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#6200ea', // Toolbar color
        },
      },
    },

  }
});
