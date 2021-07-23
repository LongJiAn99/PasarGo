import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  media: {
    height: 300,
    width: "100%",
    objectFit:'cover',
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
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
    fontSize: "12px",
    fontWeight: "bold",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  addOrder: {
    color: 'black',
    fontSize: '15px',
    fontWeight:'600',
    fontFamily: 'Poppins',
  },
  buttonTwo: {
    backgroundColor: "#09DF40",
    fontSize: "12px",
    fontWeight: "bold",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#09DF40",
    },
  },
  footer: {
    alignSelf:'center'
  }
}));
