import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import Layout from "../Layout";
import CheckoutProductSummary from "../CheckoutProductSummary";

storiesOf("Product", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Item Product Order Summary", () => (
    <Layout style={{ width: 350 }}>
      <CheckoutProductSummary
        key={"1"}
        item={{
          product: {
            image:
              "https://flash-coffee.com/id/wp-content/uploads/sites/13/2021/03/Espresso-600x1066.jpg",
            name: "Flash Americano",
            shortDescription:
              "Espresso shot dari biji kopi arabika premium dengan air mineral dalam kemasan botol 1 liter.",
            price: 70000,
            availabilityBool: true,
          },
          qty: 5,
          totalPrice: 1290000,
          variantNo: 5,
        }}
        calculating={false}
      />
    </Layout>
  ));
