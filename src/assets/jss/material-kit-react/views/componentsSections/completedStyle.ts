import { container } from "../../../material-kit-react";
import { createStyles } from '@material-ui/core/styles';

const completedStyle = createStyles({
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important" as any
  }
});

export default completedStyle;
