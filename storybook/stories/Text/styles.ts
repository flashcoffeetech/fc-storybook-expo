import { StyleSheet, TextStyle, Platform } from "react-native";
import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  largeTitle: TextStyle;
  headline1: TextStyle;
  headline2: TextStyle;
  headline3: TextStyle;
  headline4: TextStyle;
  headline5: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  body3: TextStyle;
  body4: TextStyle;
  body5: TextStyle;
  caption1: TextStyle;
  caption2: TextStyle;
  caption3: TextStyle;
  tagline1: TextStyle;
  tagline2: TextStyle;
  tagline3: TextStyle;
}

interface IDefaultStyles {
  body: TextStyle;
  headline: TextStyle;
}

export const statusColor = {
  info: appTheme["color-info-500"],
  primary: appTheme["color-primary-500"],
  success: appTheme["color-success-500"],
  danger: appTheme["color-danger-500"],
  hint: appTheme["color-hint"],
  warning: appTheme["color-cream-warning"],
};

const defaultStyles = StyleSheet.create<IDefaultStyles>({
  body: {
    textAlignVertical: "center",
    fontFamily: "DIN Next LT Pro",
    color: appTheme["color-black-80"],
  },
  headline: {
    textAlignVertical: "center",
    fontFamily: "Druk Text",
    fontWeight: Platform.OS === "ios" ? "500" : "100",
    textTransform: "uppercase",
    color: appTheme["color-black-100"],
  },
});

const styles = StyleSheet.create<IStyles>({
  largeTitle: {
    ...defaultStyles.headline,
    fontSize: 48,
    lineHeight: 60,
  },
  headline1: {
    ...defaultStyles.headline,
    fontSize: 40,
    lineHeight: 48,
  },
  headline2: {
    ...defaultStyles.headline,
    fontSize: 28,
    lineHeight: 34,
  },
  headline3: {
    ...defaultStyles.headline,
    fontSize: 22,
    lineHeight: 28,
  },
  headline4: {
    ...defaultStyles.headline,
    fontSize: 18,
    lineHeight: 28,
  },
  headline5: {
    ...defaultStyles.headline,
    fontSize: 16,
    lineHeight: 28,
  },
  body1: {
    ...defaultStyles.body,
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.5,
    color: appTheme["color-black-100"],
  },
  body2: {
    ...defaultStyles.body,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.4,
  },
  body3: {
    ...defaultStyles.body,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.24,
  },
  body4: {
    ...defaultStyles.body,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.2,
  },
  body5: {
    ...defaultStyles.body,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  caption1: {
    ...defaultStyles.body,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.08,
  },
  caption2: {
    ...defaultStyles.body,
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: -0.3,
  },
  caption3: {
    ...defaultStyles.body,
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: -0.5,
  },
  tagline1: {
    ...defaultStyles.body,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.24,
    fontWeight: "bold",
  },
  tagline2: {
    ...defaultStyles.body,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.08,
    fontWeight: "bold",
  },
  tagline3: {
    ...defaultStyles.body,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.07,
    fontWeight: "bold",
  },
});

export default styles;
