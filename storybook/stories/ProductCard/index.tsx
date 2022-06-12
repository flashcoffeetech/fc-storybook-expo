import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import _ from "lodash";
import { Text as TextSvg } from "react-native-svg";

import { IProduct } from "../../../appTypes/product.type";
import { ELanguage } from "../../../appTypes/language.type";
import { assets } from "../../../assets/assets";
import * as appTheme from "../../../assets/custom-theme.json";
import Layout from "../Layout";
import Text from "../Text";
import SwipeRight from "../SwipeRight";
import styles from "./styles";
import { EOrderType } from "../../../appTypes/order.type";

export interface IProductCard {
  testID?: string;
  item: IProduct;
  onPress: () => void;
  borderBottom?: boolean;
  productImageTestID?: string;
  productNameTestID?: string;
  productDescriptionTestID?: string;
  productPriceTestID?: string;
}

const ProductCard = ({
  testID,
  item,
  onPress,
  borderBottom,
  productImageTestID,
  productNameTestID,
  productDescriptionTestID,
  productPriceTestID,
}: IProductCard): React.ReactElement => {
  const isItemOnlyAvailableDelivery = () => {
    return (
      item?.isAvailableForDelivery !== undefined &&
      !item?.isAvailableForDelivery
    );
  };

  const borderBottomWidth = borderBottom ? 1 : 0;
  const isProductUnavailable = () => {
    return !item?.availabilityBool;
  };
  const opacity = isProductUnavailable() ? 0.5 : 1;
  const priceText = item?.displayPrice || item?.price;

  const renderPrice = () => {
    if (isProductUnavailable()) {
      return (
        <View style={styles.unavailableContainer}>
          <Text fontWeight="400" color={appTheme["color-black-60"]}>
            Out of Stock
          </Text>
        </View>
      );
    } else if (isItemOnlyAvailableDelivery()) {
      return (
        <View style={styles.unavailableContainer}>
          <Text fontWeight="400" color={appTheme["color-black-60"]}>
            Only available for pick up
          </Text>
        </View>
      );
    }
    return (
      <Text testID={productPriceTestID} status={"primary"} fontWeight="bold">
        {priceText.toString()}
      </Text>
    );
  };

  return (
    <SwipeRight
      testID={testID}
      key={item.id}
      onPress={onPress}
      onClose={onPress}
    >
      <TouchableOpacity
        testID={testID}
        onPress={onPress}
        style={[styles.container, { borderBottomWidth }]}
      >
        <Image
          testID={productImageTestID}
          key={item.id}
          style={[styles.productImage, { opacity }]}
          source={{
            uri: item.image,
          }}
        />
        <Layout style={[styles.layoutContainer, { opacity }]}>
          <Layout style={styles.productContainer}>
            <Layout style={styles.quantityContainer}>
              <Text
                testID={productNameTestID}
                color={appTheme["color-black-100"]}
                fontWeight="500"
                variant="tagline1"
                numberOfLines={2}
              >
                {item?.name}
              </Text>
              {item?.isRecommended ? (
                <Image
                  style={styles.recommendedBadgeImage}
                  source={assets.image.recommendedBadge}
                />
              ) : (
                <View />
              )}
            </Layout>
            <Text
              testID={productDescriptionTestID}
              variant="caption1"
              color={appTheme["color-black-70"]}
              numberOfLines={2}
            >
              {item?.shortDescriptionLocale || item?.shortDescription}
            </Text>
            <Layout style={styles.productPrice}>
              {renderPrice()}
              {item.storePrice ? (
                <Text
                  variant="caption1"
                  status="hint"
                  textAlign="right"
                  textDecorationLine="line-through"
                >
                  {priceText.toString()}
                </Text>
              ) : (
                <TextSvg />
              )}
            </Layout>
          </Layout>
        </Layout>
      </TouchableOpacity>
    </SwipeRight>
  );
};

export default ProductCard;
