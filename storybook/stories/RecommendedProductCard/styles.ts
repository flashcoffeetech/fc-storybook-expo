import { StyleSheet, ViewStyle, ImageStyle } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  container: ViewStyle;
  productImage: ImageStyle;
  layoutContainer: ViewStyle;
  quantityContainer: ViewStyle;
  productPrice: ViewStyle;
  unavailableContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    marginRight: 12,
    borderColor: appTheme["color-black-20"],
  },
  productImage: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "transparent",
  },
  layoutContainer: {
    width: 150,
    flex: 1,
    justifyContent: "space-between",
  },
  quantityContainer: {
    width: 120,
    flexDirection: "row",
    paddingTop: 12,
  },
  productPrice: {
    marginTop: 4,
  },
  unavailableContainer: {
    paddingTop: 4,
  },
});

export default styles;
