import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../assets/jss/material-kit-react/components/cardBodyStyle";

const useStyles = makeStyles(styles);

export default function CardBody(props: any) {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}
