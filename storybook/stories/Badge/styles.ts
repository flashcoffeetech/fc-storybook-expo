import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  layoutContainer: ViewStyle;
  badgeText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  layoutContainer: {
    paddingHorizontal: 4,
    borderRadius: 4,
    alignItems: "center",
    backgroundColor: appTheme["color-primary-500"],
    marginRight: 4,
  },
  badgeText: {
    fontWeight: "500",
    fontSize: 10,
    textAlign: "center",
    color: appTheme["color-white"],
    backgroundColor: "transparent",
    padding: 4,
  },
});

export default styles;
