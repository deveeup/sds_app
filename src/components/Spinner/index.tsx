import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { COLORS } from "../../constants/colors";

export default function SpinnerComponent({ text }: any) {
  return (
    <Spinner
      color={COLORS.BLACK}
      overlayColor="rgba(158, 5, 43, 0.63)"
      visible={true}
      textContent={text}
    />
  );
}
