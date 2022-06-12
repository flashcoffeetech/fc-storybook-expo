import * as React from "react";
import { Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Swipeable from "react-native-gesture-handler/Swipeable";

import { TrashIcon } from "../../../assets/Icons";
import Layout from "../Layout";
import styles from "./styles";

export interface ISwipeRight {
  testID?: string;
  onPress: () => void;
  onOpen?: () => void;
  onClose?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const SwipeRight = ({
  testID,
  onPress,
  onOpen,
  onClose,
  disabled = false,
  children,
}: ISwipeRight): React.ReactElement => {
  const swipeableRef = React.useRef<Swipeable>();

  const renderRightActions = () => {
    return (
      <Layout testID={testID} style={styles.container}>
        <Animated.View style={styles.animatedView}>
          <RectButton style={styles.rightAction} onPress={onPress}>
            <Layout style={styles.layoutContainer}>
              <TrashIcon
                fill="#fff"
                width="32"
                height="32"
                style={styles.trashIcon}
              />
            </Layout>
          </RectButton>
        </Animated.View>
      </Layout>
    );
  };

  if (disabled) {
    return <Layout testID={testID}>{children}</Layout>;
  } else {
    return (
      <Layout testID={testID}>
        <Swipeable
          ref={(ref: Swipeable): void => {
            swipeableRef.current = ref;
          }}
          onSwipeableOpen={onOpen}
          onSwipeableClose={onClose}
          renderRightActions={renderRightActions}
          friction={2}
          leftThreshold={30}
          rightThreshold={40}
        >
          <Layout>{children}</Layout>
        </Swipeable>
      </Layout>
    );
  }
};

export default React.memo(SwipeRight);
