import { CreateLog } from "components/log/CreateLog";
import useIsAuthenticated from "hooks/useIsAuthenticated";
import { Box } from "@mui/material";

const CreateLogView = () => {
  const [isAuthenticated] = useIsAuthenticated();

  return (<Box height="100%" bgcolor="ologBackground.main" sx={{ backgroundColor: "ologBackground.main" }}>
	   <CreateLog {...{ isAuthenticated }} />
	 </Box>);
};
export default CreateLogView;
