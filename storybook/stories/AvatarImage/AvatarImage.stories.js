import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import styles from "./styles";
import Avatar from ".";

storiesOf("Avatar Image", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with image", () => (
    <Avatar
      image="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
      customAvatarStyle={{ width: 64, height: 64 }}
    />
  ))
  .add("without image", () => (
    <Avatar image={null} customAvatarStyle={{ width: 64, height: 64 }} />
  ));
