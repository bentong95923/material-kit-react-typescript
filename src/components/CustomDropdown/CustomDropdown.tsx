import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";

// core components
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/customDropdownStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

const useStyles = makeStyles(styles);

const nullElement: HTMLElement| null = null;

export default function CustomDropdown(props: any) {
  const [anchorEl, setAnchorEl] = React.useState(nullElement);
  const handleClick = (event: any) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(nullElement);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (param: any) => {
    setAnchorEl(nullElement);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event: any) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(nullElement);
  };
  const classes = useStyles();
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding
  } = props;
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [getKeyValue(classes)((hoverColor + "Hover") as (keyof typeof classes))]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });
  let icon = null;
  switch (typeof buttonIcon) {
    case "object":
      icon = <props.buttonIcon className={classes.buttonIcon} />;
      break;
    case "string":
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }
  return (
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          {...buttonProps}
          onClick={handleClick}
        >
          {icon}
          {buttonText !== undefined ? buttonText : null}
          {caret ? <b className={caretClasses} /> : null}
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={
          dropup
            ? left
              ? "top-start"
              : "top"
            : left
            ? "bottom-start"
            : "bottom"
        }
        className={classNames({
          [classes.popperClose]: !anchorEl,
          [classes.popperResponsive]: true
        })}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            //id="menu-list"
            style={
              dropup
                ? { transformOrigin: "0 100% 0" }
                : { transformOrigin: "0 0 0" }
            }
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className={classes.menuList}>
                  {dropdownHeader !== undefined ? (
                    <MenuItem
                      onClick={() => handleClose(dropdownHeader)}
                      className={classes.dropdownHeader}
                    >
                      {dropdownHeader}
                    </MenuItem>
                  ) : null}
                  {dropdownList.map((prop: any, key: any) => {
                    if (prop.divider) {
                      return (
                        <Divider
                          key={key}
                          onClick={() => handleClose("divider")}
                          className={classes.dropdownDividerItem}
                        />
                      );
                    }
                    return (
                      <MenuItem
                        key={key}
                        onClick={() => handleClose(prop)}
                        className={dropdownItem}
                      >
                        {prop}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
