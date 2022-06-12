import * as React from "react";
import { Text } from "react-native";

import * as appTheme from "../../../assets/custom-theme.json";

import Layout from "../Layout";

import styles from "./styles";

export interface IBadge {
  text: string;
  testID?: string;
  backgroundColor?: string;
}

const Badge = ({
  text,
  testID,
  backgroundColor = appTheme["color-primary-500"],
}: IBadge): React.ReactElement => (
  <Layout testID={testID}>
    <Layout style={[styles.layoutContainer, { backgroundColor }]}>
      <Text style={styles.badgeText}>{text}</Text>
    </Layout>
  </Layout>
);

export default React.memo(Badge);
