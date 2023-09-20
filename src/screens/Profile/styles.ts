import { StyleSheet, Button } from "react-native";
import { COLORS } from "../../constants/colors";

const ProfileStyles = StyleSheet.create({
  Container: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
  },
  Input: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    width: "65%",
  },
  Button: {
    borderRadius: 25,
    backgroundColor: COLORS.RED,
    color: COLORS.WHITE,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontWeight: "bold",
  },
  Label: {
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default ProfileStyles;
