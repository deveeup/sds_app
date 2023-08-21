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
    paddingVertical: 3,
    width: "35%",
    textAlign: "right",
    overflow: "hidden",
    borderWidth: 1,
    fontWeight: "bold",
  },
  Text: {
    paddingHorizontal: 5,
    borderColor: "gray",
    paddingVertical: 3,
    width: "65%",
    textAlign: "left",
    overflow: "hidden",
    borderWidth: 1,
    fontWeight: "bold",
  },
});

export default RowStyles;
