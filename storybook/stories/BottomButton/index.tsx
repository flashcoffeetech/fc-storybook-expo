import * as React from "react";
import {
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

// import { Spinner } from "@ui-kitten/components";

import * as appTheme from "../../../assets/custom-theme.json";
import Layout from "../Layout";
import Text from "../Text";
import styles from "./styles";

export interface IBottomButton {
  onPress: (...args: any[]) => void;
  testID?: string;
  leftTextTestID?: string;
  rightTextTestID?: string;
  centerTextTestID?: string;
  leftText?: string;
  rightText?: string;
  centerText?: string;
  disabled?: boolean;
  variant?: "white" | "default";
  paddingTop?: number;
  paddingBottom?: number;
  topElement?: React.ReactElement;
  loading?: boolean;
  leftTextLeading?: React.ReactElement;
  leftTextTrailing?: React.ReactElement;
  centerTextLeading?: React.ReactElement;
  centerTextTrailing?: React.ReactElement;
  rightTextLeading?: React.ReactElement;
  rightTextTrailing?: React.ReactElement;
  containerStyle?: ViewStyle;
  shadowStyle?: ViewStyle;
  marginHorizontal?: number;
  paddingVertical?: number;
}

const BottomButton = ({
  onPress,
  testID,
  leftTextTestID,
  rightTextTestID,
  centerTextTestID,
  leftText,
  rightText,
  centerText,
  disabled,
  loading,
  paddingTop = 16,
  paddingBottom = 16,
  topElement,
  leftTextLeading,
  leftTextTrailing,
  centerTextLeading,
  variant = "default",
  centerTextTrailing,
  rightTextLeading,
  rightTextTrailing,
  containerStyle,
  shadowStyle,
  marginHorizontal = 16,
  paddingVertical = 17,
}: IBottomButton): React.ReactElement => {
  const buttonBackgroundColor =
    variant === "white" ? styles.whiteButton : styles.button;
  const textColor =
    variant === "white"
      ? appTheme["color-primary-500"]
      : appTheme["color-white"];
  const defaultContainerStyle =
    variant === "white" ? styles.whiteContainer : styles.container;
  const defaultLoadingStyle =
    variant === "white" ? styles.redButtonLoading : styles.buttonLoading;

  return (
    <Layout
      testID={testID}
      style={[
        containerStyle || defaultContainerStyle,
        shadowStyle || styles.shadow,
        { paddingTop },
        { paddingBottom },
      ]}
    >
      {topElement}
      {loading ? (
        <TouchableOpacity
          onPress={onPress}
          style={[
            { minWidth: 240 },
            defaultLoadingStyle,
            { paddingVertical, marginHorizontal },
          ]}
          disabled
        >
          <ActivityIndicator />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          testID={testID}
          onPress={onPress}
          style={[
            { minWidth: 240 },
            buttonBackgroundColor,
            { marginHorizontal },
            disabled && { backgroundColor: appTheme["color-black-50"] },
          ]}
          disabled={disabled}
        >
          {(leftText || leftTextLeading || leftTextTrailing) && (
            <View style={styles.leftContent}>
              <>
                {leftTextLeading}
                {leftText && (
                  <Text
                    testID={leftTextTestID}
                    variant="tagline1"
                    marginTop={4}
                    color={textColor}
                  >
                    {leftText}
                  </Text>
                )}
                {leftTextTrailing}
              </>
            </View>
          )}

          {(centerText || centerTextLeading || centerTextTrailing) && (
            <View style={styles.centerContent}>
              <>
                {centerTextLeading}
                {centerText && (
                  <Text
                    testID={centerTextTestID}
                    variant="tagline1"
                    textAlign="center"
                    color={
                      variant === "white"
                        ? appTheme["color-primary-500"]
                        : appTheme["color-white"]
                    }
                  >
                    {centerText}
                  </Text>
                )}
                {centerTextTrailing}
              </>
            </View>
          )}

          {(rightText || rightTextLeading || rightTextTrailing) && (
            <View style={styles.rightContent}>
              <>
                {rightTextLeading}
                {rightText && (
                  <Text
                    testID={rightTextTestID}
                    variant="body1"
                    color={textColor}
                    fontWeight={Platform.OS === "ios" ? "500" : "bold"}
                    textAlign="right"
                  >
                    {rightText}
                  </Text>
                )}
                {rightTextTrailing}
              </>
            </View>
          )}
        </TouchableOpacity>
      )}
    </Layout>
  );
};

export default React.memo(BottomButton);
