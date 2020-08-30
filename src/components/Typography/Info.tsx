import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "../../assets/jss/material-kit-react/components/typographyStyle";

const useStyles = makeStyles(styles);

export default function Info(props: any) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}
