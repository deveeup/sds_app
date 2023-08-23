import { StyleSheet } from "react-native";

const RowStyles = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Title: {
    paddingHorizontal: 5,
    borderColor: "gray",
    paddingVertical: 4,
    width: "40%",
    textAlign: "right",
    overflow: "hidden",
    borderWidth: 1,
    fontWeight: "bold",
  },
  Text: {
    paddingHorizontal: 5,
    borderColor: "gray",
    paddingVertical: 4,
    width: "60%",
    textAlign: "left",
    overflow: "hidden",
    borderWidth: 1,
    fontWeight: "normal",
  },
});

export default RowStyles;
