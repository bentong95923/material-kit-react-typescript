import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/badgeStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) =>
    obj[key];
  
const useStyles = makeStyles(styles);

function Badge(props: any) {
  const classes = useStyles();
  const color = props.color;
  const { children } = props;
  return (
    <span className={classes.badge + " " + getKeyValue(classes)(color)}>
      {children}
    </span>
  );
}

Badge.defaultProps = {
  color: "gray"
};

export default Badge;