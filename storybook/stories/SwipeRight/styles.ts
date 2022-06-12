import { StyleSheet, ViewStyle, I18nManager } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  container: ViewStyle;
  actionIcon: ViewStyle;
  rightAction: ViewStyle;
  animatedView: ViewStyle;
  layoutContainer: ViewStyle;
  trashIcon: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    width: 68,
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  animatedView: {
    flex: 1,
    transform: [{ translateX: 0 }],
  },
  layoutContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appTheme["color-primary-500"],
  },
  trashIcon: {
    marginHorizontal: 22,
    marginVertical: 8,
    flex: 1,
    textAlign: "center",
  },
});

export default styles;
