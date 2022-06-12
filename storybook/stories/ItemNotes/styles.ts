import { StyleSheet, ViewStyle } from "react-native";
import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  container: ViewStyle;
  title: ViewStyle;
  itemNoteInputLayout: ViewStyle;
  inputItemNote: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
  },
  itemNoteInputLayout: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: appTheme["color-black-15"],
    backgroundColor: appTheme["color-white"],
    alignItems: "flex-end",
  },
  inputItemNote: {
    width: "100%",
    padding: 0,
  },
});

export default styles;
