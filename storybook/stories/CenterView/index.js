import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import style from "./style";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

export default function CenterView({ children }) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={style.main}>{children}</View>
      </ApplicationProvider>
    </>
  );
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
