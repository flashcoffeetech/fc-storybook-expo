import * as appTheme from "../../../assets/custom-theme.json";
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

interface IStyles {
  title: ViewStyle;
  productImage: ImageStyle;
  checkoutProductSummaryLayout: ViewStyle;
  checkoutProductSummaryContentLayout: ViewStyle;
  cartProductLayout: ViewStyle;
  productInfoLayout: ViewStyle;
  productNameLayout: ViewStyle;
  productVariantLayout: ViewStyle;
  productQtyInfoLayout: ViewStyle;
  editProductQtyLayout: ViewStyle;
  editProductQtyButton: ViewStyle;
  editProductQtyButtonPlus: ViewStyle;
  currentProductQty: ViewStyle;
  goToProductDetailButtonLayout: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  title: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  productImage: {
    height: 65,
    width: 65,
    resizeMode: "cover",
    borderRadius: 4,
    borderColor: appTheme["color-black-15"],
    borderWidth: 1,
  },
  checkoutProductSummaryLayout: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 24,
    borderStyle: "solid",
    borderColor: appTheme["color-black-20"],
    borderBottomWidth: 1,
    backgroundColor: appTheme["color-white"],
  },
  checkoutProductSummaryContentLayout: {
    flexDirection: "column",
    marginLeft: 12,
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  cartProductLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  productInfoLayout: { flex: 1, backgroundColor: "transparent" },
  productNameLayout: {
    flexDirection: "row",
    marginBottom: 4,
    backgroundColor: "transparent",
  },
  productVariantLayout: {
    paddingRight: 8,
    backgroundColor: "transparent",
  },
  productQtyInfoLayout: { backgroundColor: appTheme["color-white"] },
  editProductQtyLayout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  editProductQtyButton: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: appTheme["color-black-70"],
  },
  editProductQtyButtonPlus: {
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    backgroundColor: appTheme["color-primary-500"],
    borderColor: appTheme["color-primary-500"],
  },
  currentProductQty: {
    backgroundColor: "transparent",
    padding: 4,
    paddingTop: 8,
    minWidth: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  goToProductDetailButtonLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "transparent",
  },
});

export default styles;
