import { StyleSheet, ViewStyle } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  container: ViewStyle;
  itemContainer: ViewStyle;
  loader: ViewStyle;
  loader2: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    paddingHorizontal: 16,
    backgroundColor: appTheme["color-white"],
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 8,
  },
  loader: {
    flex: 3,
  },
  loader2: {
    flex: 1,
  },
});

export default styles;
