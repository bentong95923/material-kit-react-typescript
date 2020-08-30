import React from "react";
// @material-ui/core components
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = createStyles({
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
});

const useStyles = makeStyles(styles);

export default function GridItem(props: any) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};
