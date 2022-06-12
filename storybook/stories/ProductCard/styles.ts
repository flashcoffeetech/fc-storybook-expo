import { StyleSheet, ViewStyle, ImageStyle } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

interface IStyles {
  container: ViewStyle;
  productImage: ImageStyle;
  recommendedBadgeImage: ImageStyle;
  layoutContainer: ViewStyle;
  quantityContainer: ViewStyle;
  productContainer: ViewStyle;
  productPrice: ViewStyle;
  unavailableContainer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    paddingVertical: 16,
    borderColor: appTheme["color-black-20"],
    backgroundColor: "transparent",
  },
  productImage: {
    height: 92,
    width: 92,
    resizeMode: "cover",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "transparent",
  },
  recommendedBadgeImage: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    paddingLeft: 0,
    marginLeft: 4,
    transform: [{ rotate: "25deg" }],
  },
  layoutContainer: {
    flexDirection: "row",
    marginLeft: 12,
    flex: 1,
    backgroundColor: "transparent",
  },
  quantityContainer: {
    flexDirection: "row",
    marginBottom: 4,
    backgroundColor: "transparent",
    alignItems: "flex-start",
    width: "90%",
  },
  productContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  productPrice: {
    marginTop: 4,
  },
  unavailableContainer: {
    paddingTop: 4,
  },
});

export default styles;
