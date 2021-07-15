import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    minWidth: "256px",
  },
  media: {
    height: "auto",
    width: "100%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    transform: "scale(1.3)",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    width: "auto",
  },
  cardActionsTwo: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    color: "black",
    fontSize: "15px",
    fontWeight: "bold",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
}));
