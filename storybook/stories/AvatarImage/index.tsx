import * as React from "react";
import { Image, ImageStyle, View } from "react-native";

import FlashLogo from "../../../assets/svg/flash-logo.svg";
import styles from "./styles";

export interface IAvatarImage {
  image?: string | null;
  testID?: string;
  onError?: () => void;
  customAvatarStyle?: ImageStyle;
  customEmptyStyle?: ImageStyle;
  customFlashSize?: number;
}

const AvatarImage = ({
  image = null,
  testID = "avatarImage",
  onError,
  customAvatarStyle,
  customEmptyStyle,
  customFlashSize,
}: IAvatarImage): React.ReactElement => {
  if (image) {
    return (
      <Image
        testID={testID}
        source={{ uri: image }}
        style={{ ...styles.container, ...customAvatarStyle }}
        onError={onError}
      />
    );
  }

  return (
    <View
      testID={testID}
      style={{ ...styles.emptyAvatar, ...customEmptyStyle }}
    >
      <FlashLogo height={customFlashSize || 46} />
    </View>
  );
};

export default React.memo(AvatarImage);
