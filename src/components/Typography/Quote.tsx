import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "../../assets/jss/material-kit-react/components/typographyStyle";

const useStyles = makeStyles(styles);

export default function Quote(props: any) {
  const { text, author } = props;
  const classes = useStyles();
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}
