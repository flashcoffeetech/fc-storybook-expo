import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import Layout from "../Layout";
import ItemNotes from "../ItemNotes";

storiesOf("Order", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Item Note", () => (
    <Layout style={{ width: 350, height: 130 }}>
      <ItemNotes />
    </Layout>
  ));
