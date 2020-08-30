import React from "react";

// @material-ui/core components
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = createStyles({
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
});

const useStyles = makeStyles(styles);

export default function GridContainer(props: any) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};
