import { containerFluid } from "../../../material-kit-react";

import imagesStyle from "../../imagesStyles";
import { createStyles } from "@material-ui/core/styles";

const exampleStyle = createStyles({
  section: {
    padding: "70px 0"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important" as any
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
});

export default exampleStyle;
