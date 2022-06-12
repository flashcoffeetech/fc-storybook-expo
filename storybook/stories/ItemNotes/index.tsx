import * as React from "react";
import { TextInput } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";
import Layout from "../Layout";
import Text from "../Text";
import styles from "./styles";

const ItemNotes = (): React.ReactElement => {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputBorderColor = isFocused
    ? appTheme["color-primary-500"]
    : appTheme["color-black-15"];

  return (
    <Layout style={styles.container}>
      <Layout style={styles.title}>
        <Text testID="" flex={1} variant="headline4">
          Special Instructions
        </Text>
        <Text variant="tagline3" color={appTheme["color-black-40"]}>
          Optional
        </Text>
      </Layout>
      <Layout
        style={{ ...styles.itemNoteInputLayout, borderColor: inputBorderColor }}
      >
        <TextInput
          testID=""
          placeholder={
            "Add any special requests or allergy information here (subject to Flash Coffee’s discretion"
          }
          autoCapitalize="none"
          autoCorrect={false}
          multiline
          maxLength={100}
          style={styles.inputItemNote}
          onBlur={() => setIsFocused(false)}
          selectionColor={appTheme["color-primary-500"]}
        />
      </Layout>
    </Layout>
  );
};

export default ItemNotes;
