import { StyleSheet, ImageStyle } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  container: ImageStyle;
  emptyAvatar: ImageStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "cover",
    marginBottom: 8,
    marginRight: 16,
  },
  emptyAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: appTheme["color-success-500"],
    marginBottom: 8,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
