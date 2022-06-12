import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import Layout from "../Layout";
import ProductVariantOptionIcon from ".";

const option = [
  {
    id: "1",
    name: "sugar",
    nameLocale: "sugar",
    isDefault: true,
    priceDifference: 5000,
    icon: "icon",
    isSelected: true,
  },
  {
    id: "1",
    name: "sugar",
    nameLocale: "sugar",
    isDefault: true,
    priceDifference: 5000,
    icon: "icon",
    isSelected: false,
  },
];

const optionChangedSingle = (option) => {
  let isSelected = false;
  if (item.id === option.id) {
    isSelected = variant.isRequired ? true : !item.isSelected;
  }
  return setOptions({ ...item, isSelected });
};

storiesOf("Product", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Product Variant Icon Selected", () => (
    <Layout style={{ width: 350 }}>
      <ProductVariantOptionIcon
        key={option.id}
        option={option[0]}
        optionChanged={optionChangedSingle}
      />
    </Layout>
  ))
  .add("Product Variant Icon Unselected", () => (
    <Layout style={{ width: 350 }}>
      <ProductVariantOptionIcon
        key={option.id}
        option={option[1]}
        optionChanged={optionChangedSingle}
      />
    </Layout>
  ));
