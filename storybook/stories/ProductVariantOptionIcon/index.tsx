import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Card } from "@ui-kitten/components";

import { IVariantOption } from "../../../appTypes/product.type";
import * as appTheme from "../../../assets/custom-theme.json";
import Text from "../Text";
import VariantIcons from "../ProductVariantIcons";
import styles from "./styles";

export interface IProductDetailOption {
  option: IVariantOption;
  optionChanged: (option: IVariantOption) => void;
}

const ProductVariantOptionIcon = ({
  option,
  optionChanged,
}: IProductDetailOption): React.ReactElement => {
  const nameTextColor = option.isSelected
    ? appTheme["color-primary-500"]
    : "rgba(0, 0, 0, 0.5)";
  const priceTextColor = option.isSelected
    ? "rgba(250, 39, 90, 0.6)"
    : "#C3C1C1";

  const getOptionName = (): string => {
    return option.name;
  };

  return (
    <Card
      style={[
        styles.optionContainer,
        option.isSelected ? styles.optionContainerSelected : {},
      ]}
    >
      <TouchableOpacity
        onPress={(): void => {
          optionChanged(option);
        }}
        style={styles.buttonContainer}
      >
        <VariantIcons name={option.icon} isSelected={true} />
        <Text variant="tagline3" color={nameTextColor} textAlign="center">
          {getOptionName()}
        </Text>
        <Text variant="caption1" color={priceTextColor} textAlign="center">
          {
            // option.priceDifference > 0
            //   ? `+ ${formatPriceWithCurrency(
            //       currentCountry,
            //       option.priceDifference,
            //     )}`
            //   :
            ""
          }
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default ProductVariantOptionIcon;
