import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const LanguageStyles = StyleSheet.create({
  Container: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
  },
  Button: {
    backgroundColor: COLORS.VIOLET,
    borderRadius: 25,
    marginVertical: 50,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  Text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default LanguageStyles;
