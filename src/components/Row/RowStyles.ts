import { StyleSheet } from "react-native";

const RowStyles = StyleSheet.create({
  Button: {
    alignItems: "center",
    backgroundColor: "#3C0C24",
    borderRadius: 10,
    color: "white",
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 0,
    paddingHorizontal: 8,
    paddingVertical: 2,
    width: "50%",
  },
  TextButton: {
    color: "white",
    fontWeight: "bold",
  },
  Container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  Title: {
    borderColor: "#C2C2C2",
    borderWidth: 1,
    fontWeight: "bold",
    overflow: "hidden",
    paddingHorizontal: 5,
    paddingVertical: 4,
    textAlign: "right",
    width: "40%",
  },
  Text: {
    borderColor: "#C2C2C2",
    borderWidth: 1,
    fontWeight: "normal",
    overflow: "hidden",
    paddingHorizontal: 5,
    paddingVertical: 4,
    textAlign: "left",
    width: "60%",
  },
  ButtonContainer: {
    alignItems: "flex-start",
    borderColor: "#C2C2C2",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: "60%",
  },
});

export default RowStyles;
