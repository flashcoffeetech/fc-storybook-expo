import * as React from "react";
import { Image, TouchableOpacity } from "react-native";

import { ICartItem } from "../../../appTypes/cart.type";
import {
  IProduct,
  IVariant,
  IVariantOption,
} from "../../../appTypes/product.type";
import * as appTheme from "../../../assets/custom-theme.json";
import { MinIcon, PlusIcon } from "../../../assets/Icons";
import Layout from "../Layout";
import Text from "../Text";
import _ from "lodash";
import styles from "./styles";

interface ICheckoutProductSummary {
  item: ICartItem;
  calculating?: boolean;
  updateQty: (
    product: IProduct,
    qty: number,
    optionPrice: number,
    variantNo: number
  ) => void;
}

const options = ["Separated Ice", "Small", "Normal", "Sugar", "Fresh Milk"];

const CheckoutProductSummary = ({
  item: { product, qty, optionPrice, totalPrice, variantNo },
  calculating = false,
  updateQty,
}: ICheckoutProductSummary): React.ReactElement => {
  const translateOptionsList = (options: string[]): string => {
    const translated: string[] = [];
    options?.map((item) => {
      translated.push(item);
    });
    return translated.join(" \u00B7 ");
  };

  const onPress = () => {};

  return (
    <Layout style={styles.checkoutProductSummaryLayout}>
      <TouchableOpacity testID="checkout_logoProductImage" onPress={onPress}>
        <Image
          style={styles.productImage}
          source={{
            uri: product.image,
          }}
        />
      </TouchableOpacity>

      <Layout style={styles.checkoutProductSummaryContentLayout}>
        <Layout style={styles.cartProductLayout}>
          <Layout style={styles.productInfoLayout}>
            <Layout style={styles.productNameLayout}>
              <Text
                testID="checkout_txtProductName"
                variant="body2"
                fontWeight="bold"
              >
                {product?.name}
              </Text>
            </Layout>
            <Layout style={styles.productVariantLayout}>
              <Text
                testID="checkout_txtProductAddition"
                variant="body3"
                color={appTheme["color-black-80"]}
              >
                {translateOptionsList(options)}
              </Text>
            </Layout>

            {!_.isEmpty(product?.notes) && (
              <Text
                testID="checkout_txtProductAddition"
                variant="caption1"
                color={appTheme["color-black-50"]}
              >
                {product?.notes}
              </Text>
            )}
          </Layout>

          <Layout style={styles.productQtyInfoLayout}>
            <Layout style={styles.editProductQtyLayout}>
              <TouchableOpacity
                testID="checkout_btnMinusQty"
                disabled={calculating}
                onPress={(): void => {
                  updateQty(product, qty - 1, optionPrice, variantNo);
                }}
                style={styles.editProductQtyButton}
              >
                <MinIcon
                  width="16"
                  height="16"
                  fill={appTheme["color-black-70"]}
                />
              </TouchableOpacity>

              <Layout style={styles.currentProductQty}>
                <Text testID="checkout_txtQty">{`${qty}`}</Text>
              </Layout>

              <TouchableOpacity
                testID="checkout_btnPlusQty"
                disabled={calculating}
                onPress={(): void => {
                  updateQty(product, qty + 1, optionPrice, variantNo);
                }}
                style={styles.editProductQtyButtonPlus}
              >
                <PlusIcon
                  width="16"
                  height="16"
                  fill={appTheme["color-white"]}
                />
              </TouchableOpacity>
            </Layout>
          </Layout>
        </Layout>

        <Layout style={styles.goToProductDetailButtonLayout}>
          <TouchableOpacity testID="checkout_txtEdit" onPress={onPress}>
            <Text variant="body3" status="info" fontWeight="bold">
              Customize
            </Text>
          </TouchableOpacity>
          <Text
            testID="checkout_txtProductTotalAmount"
            variant="body3"
            color={appTheme["color-black-40"]}
          >
            {`${totalPrice}`}
          </Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CheckoutProductSummary;
