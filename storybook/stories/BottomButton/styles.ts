import { StyleSheet, ViewStyle } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  container: ViewStyle;
  whiteContainer: ViewStyle;
  button: ViewStyle;
  whiteButton: ViewStyle;
  buttonLoading: ViewStyle;
  redButtonLoading: ViewStyle;
  shadow: ViewStyle;
  rightContent: ViewStyle;
  centerContent: ViewStyle;
  leftContent: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: appTheme["color-white"],
    paddingBottom: 16,
  },
  whiteContainer: {
    backgroundColor: appTheme["color-white"],
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: appTheme["color-primary-500"],
    borderRadius: 4,
    padding: 14,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  whiteButton: {
    backgroundColor: appTheme["color-white"],
    borderWidth: 1,
    borderColor: appTheme["color-primary-500"],
    borderRadius: 4,
    padding: 14,
    flexDirection: "row",
  },
  buttonLoading: {
    backgroundColor: appTheme["color-primary-500"],
    borderRadius: 4,
    padding: 17,
    marginHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
  },
  redButtonLoading: {
    backgroundColor: appTheme["color-primary-500"],
    borderRadius: 4,
    padding: 14,
    flexDirection: "column",
    alignItems: "center",
  },
  shadow: {
    shadowColor: appTheme["color-black-100"],
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 18,
  },
  rightContent: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  leftContent: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});

export default styles;
