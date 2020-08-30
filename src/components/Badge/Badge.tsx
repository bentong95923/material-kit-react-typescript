import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/badgeStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];
  
const useStyles = makeStyles(styles);

export default function Badge(props: any) {
  const classes = useStyles();
  const { color, children } = props;
  return (
    <span className={classes.badge + " " + getKeyValue(classes)(color)}>
      {children}
    </span>
  );
}

Badge.defaultProps = {
  color: "gray"
};
