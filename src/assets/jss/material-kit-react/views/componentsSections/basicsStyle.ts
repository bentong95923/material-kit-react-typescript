import { container, title } from "../../../material-kit-react";
import customCheckboxRadioSwitch from "../../../material-kit-react/customCheckboxRadioSwitch";
import { createStyles } from '@material-ui/core/styles';

const basicsStyle = createStyles({
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  ...customCheckboxRadioSwitch
});

export default basicsStyle;
