import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import Badge from ".";

storiesOf("Badge", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default Badge", () => <Badge text={"Badge"} />);
