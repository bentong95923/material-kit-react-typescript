import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

import styles from "../../assets/jss/material-kit-react/components/navPillsStyle";

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

const useStyles = makeStyles(styles);

export default function NavPills(props: any) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event: any, active: any) => {
    setActive(active);
  };
  const handleChangeIndex = (index: any) => {
    setActive(index);
  };
  const classes = useStyles();
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop: any, key: any) => {
        var icon: {[k: string]: any} = {};
        if (prop.tabIcon !== undefined) {
          icon.icon = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: getKeyValue(classes)(color),
              wrapper: classes.tabWrapper
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop: any, key: any) => {
          return (
            // <div className={classes.tabContent} key={key}>
            <div key={key}>
              {prop.tabContent}
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};
