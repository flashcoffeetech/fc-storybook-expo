import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import Layout from "../Layout";
import ProductLoader from ".";

storiesOf("Product", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Product Loader", () => (
    <Layout style={{ width: 350 }}>
      <ProductLoader />
    </Layout>
  ));
