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

const colors = {
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
  "entryTopUp": "#0000ff",
  "entryStartofShift": "#3b8674",
  "entryEndofShift": "#3b8674",
  "entryImportant": "#ff0000",
  "entryOnCallContact": "#ff0000",
  "entryBeamOff": "#ff8000",
  "entryZoneAccess": "#648444",
  "entryLockup": "#8040ff",
  "entryBypass": "#F5A608",
  "entryComment": "#0000ff",
  "entryShiftSummary": "#0000ff",
  "entryCommentsfromBeamlines": "#de2fc6",
  "entryMachineConfiguration": "#de2fc6",
  "entryMaintenance": "#000000",

  "ologHover": "#ECF0F3",
  "ologReply": "#0099dc24",
  "ologLine" : "#dedede",
  "ologNeutralGrey" : "#757575",
  "ologSpacer" : "#CCCCCC"
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
    }
  }
});
