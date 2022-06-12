import { StyleSheet } from "react-native";
import * as appTheme from "../assets/custom-theme.json";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 24,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    marginVertical: 8,
  },
  button: {
    marginBottom: 16,
  },
  input: {
    marginVertical: 8,
  },
  inputText: { alignContent: "center", textAlign: "center" },
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  backButton: {
    left: 0,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  headerStyle: {
    backgroundColor: appTheme["color-success-500"],
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  // headerTitleStyle: { fontFamily: "Druk Text", textTransform: "uppercase" },
  headerTitleStyle: { textTransform: "uppercase" },
  avatarRightSpace: { marginRight: 16 },
  toastStyle: {
    flex: 0,
    bg: appTheme["color-primary-500"],
    borderRadius: 8,
    borderColor: "transparent",
    marginVertical: 20,
  },
  toastNewStyleBlack: {
    flex: 0,
    bg: appTheme["color-black"],
    borderRadius: 8,
    marginVertical: 20,
  },
  toastMessagePropsStyle: {
    fontSize: 14,
    letterSpacing: -0.2,
    // fontFamily: "DIN Next LT Pro",
    backgroundColor: "transparent",
    textAlignVertical: "center",
    alignSelf: "flex-start",
    color: appTheme["color-white"],
  },
  toastCloseButtonStyle: {
    px: 10,
    bg: "transparent",
    alignSelf: "flex-end",
  },
});
