import { container, title } from "../../../material-kit-react";
import { createStyles } from "@material-ui/core/styles";

const pillsStyle = createStyles({
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
});

export default pillsStyle;
