import React from "react";

// mterial-ui components
import { createStyles, makeStyles } from "@material-ui/core/styles";

const styles = createStyles({
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
});

const useStyles = makeStyles(styles);

export default function Clearfix() {
  const classes = useStyles();
  return <div className={classes.clearfix} />;
}
