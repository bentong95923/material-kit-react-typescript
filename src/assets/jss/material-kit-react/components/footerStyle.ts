import { container, primaryColor } from "../../material-kit-react";
import { createStyles } from "@material-ui/core/styles";

const footerStyle = createStyles({
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: 500,
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important" as any,
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important" as any
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: 2,
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
});
export default footerStyle;
