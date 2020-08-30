import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "../../assets/jss/material-kit-react/components/paginationStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

const useStyles = makeStyles(styles);

export default function Pagination(props: any) {
  const classes = useStyles();
  const { pages, color } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop: any, key: any) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [getKeyValue(classes)(color)]: prop.active,
          [classes.disabled]: prop.disabled
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: "primary"
};

