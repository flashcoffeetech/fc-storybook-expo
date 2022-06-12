import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import _ from "lodash";
import { Text as TextSvg } from "react-native-svg";

import { IProduct } from "../../../appTypes/product.type";
import * as appTheme from "../../../assets/custom-theme.json";
import Text from "../Text";
import styles from "./styles";

export interface IRecommendedProductCard {
  testID?: string;
  item: IProduct;
  onPress: () => void;
  borderBottom?: boolean;
  productImageTestID?: string;
  productNameTestID?: string;
  productPriceTestID?: string;
  index: number;
  productAvailability?: boolean;
}

const RecommendedProductCard = ({
  testID,
  item,
  onPress,
  borderBottom,
  productImageTestID,
  productNameTestID,
  productPriceTestID,
  index,
  productAvailability = true,
}: IRecommendedProductCard): React.ReactElement => {
  const isProductUnavailable = () => {
    return !productAvailability;
  };

  const borderBottomWidth = borderBottom ? 1 : 0;
  const opacity = isProductUnavailable() ? 0.5 : 1;
  const marginLeft = index === 0 ? 16 : 0;

  const priceText = item?.displayPrice || item?.price || 0;

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.container, { borderBottomWidth, marginLeft }]}
    >
      <Image
        testID={productImageTestID}
        key={item.id}
        style={[styles.productImage, { opacity }]}
        source={{
          uri: item.image,
        }}
      />
      <View style={[styles.layoutContainer, { opacity }]}>
        <View testID="homepage_txtProductName" style={styles.quantityContainer}>
          <Text
            testID={productNameTestID}
            color={appTheme["color-black-100"]}
            fontWeight="500"
            numberOfLines={2}
          >
            {item.name}
          </Text>
        </View>
        <View style={styles.productPrice}>
          {isProductUnavailable() ? (
            <View style={styles.unavailableContainer}>
              <Text fontWeight="400" color={appTheme["color-black-60"]}>
                Out of Stock
              </Text>
            </View>
          ) : (
            <Text
              testID={productPriceTestID}
              status={"primary"}
              fontWeight="bold"
            >
              {priceText.toString()}
            </Text>
          )}
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedProductCard;
