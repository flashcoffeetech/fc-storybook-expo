import { StyleSheet, ViewStyle } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  title: ViewStyle;
  optionContainer: ViewStyle;
  optionContainerSelected: ViewStyle;
  buttonContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  title: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  optionContainer: {
    marginRight: 12,
    height: 100,
    width: 120,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderWidth: 0,
    padding: 0,
  },
  optionContainerSelected: {
    backgroundColor: appTheme["color-success-500"],
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
