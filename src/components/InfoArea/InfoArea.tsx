import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/infoStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

const useStyles = makeStyles(styles);

export default function InfoArea(props: any) {
  const classes = useStyles();
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [getKeyValue(classes)(iconColor)]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};
