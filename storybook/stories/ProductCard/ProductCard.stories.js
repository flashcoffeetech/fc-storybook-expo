import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import Layout from "../Layout";
import ProductCard from "../ProductCard";

storiesOf("Product", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Item Product Card", () => (
    <Layout style={{ width: 350 }}>
      <ProductCard
        key={0}
        item={{
          image:
            "https://flash-coffee.com/id/wp-content/uploads/sites/13/2021/03/Espresso-600x1066.jpg",
          name: "Flash Americano",
          shortDescription:
            "Espresso shot dari biji kopi arabika premium dengan air mineral dalam kemasan botol 1 liter.",
          price: 70000,
          availabilityBool: true,
        }}
        onPress={action("Click-Product")}
      />
    </Layout>
  ));
