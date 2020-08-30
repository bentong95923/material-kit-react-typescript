import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
// core components
import styles from "../../assets/jss/material-kit-react/components/customLinearProgressStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

const useStyles = makeStyles(styles);

export default function CustomLinearProgress(props: any) {
  const classes = useStyles();
  const { color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + getKeyValue(classes)(color + "Background" as (keyof typeof styles)),
        bar: classes.bar + " " + getKeyValue(classes)(color)
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};
