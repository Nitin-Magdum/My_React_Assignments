import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { TodoContext } from "./Todo-context";

const Theme = () => {
  const { setDarktheme, darktheme } = useContext(TodoContext);

  return (
    <div className="d-flex justify-content-end">
      <FormControlLabel
        value="end"
        control={
          <Switch color="primary" onChange={() => setDarktheme(!darktheme)} />
        }
        label="Dark"
        labelPlacement="end"
      />
    </div>
  );
};

export default Theme;
