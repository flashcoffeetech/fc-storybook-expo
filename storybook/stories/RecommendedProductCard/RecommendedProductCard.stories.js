import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import Layout from "../Layout";
import RecommendedProductCard from "../RecommendedProductCard";

storiesOf("Product", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Item Recommended Product Card", () => (
    <Layout style={{ height: 230 }}>
      <RecommendedProductCard
        key={0}
        item={{
          image:
            "https://flash-coffee.com/id/wp-content/uploads/sites/13/2021/03/Espresso-600x1066.jpg",
          name: "Espresso",
          price: 18000,
          availabilityBool: true,
        }}
        onPress={action("Click-Profuct")}
      />
    </Layout>
  ));
