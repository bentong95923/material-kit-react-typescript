import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components

import styles from "../../assets/jss/material-kit-react/components/snackbarContentStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

const useStyles = makeStyles(styles);

const nullJSXElement: any = null;

export default function SnackbarContent(props: any) {
  const { message, color, close, icon } = props;
  const classes = useStyles();
  let action: any = [];
  const closeAlert = () => {
    setAlert(nullJSXElement);
  };
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={closeAlert}
      >
        <Close className={classes.close} />
      </IconButton>
    ];
  }
  let snackIcon = null;
  switch (typeof icon) {
    case "object":
      snackIcon = <props.icon className={classes.icon} />;
      break;
    case "string":
      snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
      break;
    default:
      snackIcon = null;
      break;
  }
  const [alert, setAlert] = React.useState(
    <Snack
      message={
        <div>
          {snackIcon}
          {message}
          {close !== undefined ? action : null}
        </div>
      }
      classes={{
        root: classes.root + " " + getKeyValue(classes)(color),
        message: classes.message + " " + classes.container
      }}
    />
  );
  return alert;
}
