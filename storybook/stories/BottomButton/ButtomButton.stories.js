import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import styles from "./styles";
import Button from ".";

storiesOf("Buttom Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default variant", () => (
    <Button
      onPress={action("clicked-text")}
      centerText="Default"
      variant="default"
    />
  ))
  .add("white variant", () => (
    <Button
      onPress={action("clicked-text")}
      centerText="White"
      variant="white"
    />
  ))
  .add("Loading", () => (
    <Button
      onPress={action("clicked-loading")}
      style={styles.buttonLoading}
      loading
    />
  ))
  .add("Disabled", () => (
    <Button onPress={action("clicked-text")} centerText="Disabled" disabled />
  ));
