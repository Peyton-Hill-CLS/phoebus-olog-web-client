import { IconButton, InputAdornment, Stack, Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { removeEmptyKeys } from "api/ologApi";
import { TextInput } from "components/shared/input/TextInput";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  defaultSearchParams,
  useSearchParams
} from "features/searchParamsReducer";
import useSanitizedSearchParams, {
  withoutParams,
  withoutCacheBust
} from "hooks/useSanitizedSearchParams";
import { updateAdvancedSearch } from "src/features/advancedSearchThunk";

const DaySearch = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const { toSearchParams, toQueryString } = useSanitizedSearchParams();


  const formatDate = function(date) {     
    return  date.getFullYear() + '-' +
      String(date.getMonth() + 1).padStart(2, '0') + '-' +
      String(date.getDate()).padStart(2, '0') + ' ' +
      String(date.getHours()).padStart(2, '0') + ':' +
      String(date.getMinutes()).padStart(2, '0');
  }

  const setDate = function(date) {
    let params = {...searchParams};  
    params.start = formatDate(new Date(date.getFullYear(), date.getMonth(), date.getDate())); 
    params.end = formatDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
    dispatch(updateAdvancedSearch(params));
  }  


  const onPrevious = () => {
    const currentDate = searchParams.start.length !== 0 ? new Date(searchParams.start) : new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    setDate(currentDate);
  };

  const onNext = () => {
    let currentDate = searchParams.start.length !== 0 ? new Date(searchParams.start) : new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    if(currentDate > Date.now()) {
      currentDate = new Date();
    }
    console.log(currentDate);
    setDate(currentDate);
  };

  const onToday = () => {
    let params = {...searchParams};
    const date = Date.now();
  };

  const getDay = () => {
    const day = searchParams.start.length !== 0 ? new Date(searchParams.start) : new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(day);
  };

    return (
    <Stack
      component="form"
      gap={1}
      width="100%"
      sx={{
        flex: 3,
        padding: "0 14px 0 30px",
        "& .MuiFormLabel-root[data-shrink='false']": {
          transform: "translate(14px, 14px)"
        }
      }}
    >
      <Box width="100%" justifyContent="center" alignItems="center" display="flex">
          <IconButton
            onClick={onPrevious}
            sx={{ height: "min-content", marginRight: "16px", color: "ologIcon.main" }}
          >
            <NavigateBeforeIcon />
          </IconButton>
	  <Typography> {getDay()} </Typography>
          <IconButton
            onClick={onNext}
            sx={{ height: "min-content", marginLeft: "16px", color: "ologIcon.main" }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
    </Stack>
  );
};

export default DaySearch;

