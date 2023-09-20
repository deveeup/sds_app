import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const PetDetailStyles = StyleSheet.create({
  Container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  PetImage: {
    borderRadius: 200,
    borderWidth: 2,
    borderColor: COLORS.VIOLET,
    height: 200,
    marginTop: 50,
    width: 200,
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  ImageContainer: {
    position: "relative",
  },
  ImageContainerIcon: {
    bottom: -7,
    display: "flex",
    height: 35,
    justifyContent: "center",
    position: "absolute",
    right: 25,
    width: 35,
  },
});

export default PetDetailStyles;
