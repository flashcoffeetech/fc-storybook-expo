import * as React from "react";
import { View } from "react-native";

import ContentLoader from "react-native-easy-content-loader";

import styles from "./styles";

const loaderData: Array<number> = [1];

const ProductLoader = (): React.ReactElement => {
  return (
    <>
      {loaderData.map((item: number) => (
        <View style={styles.container} key={item}>
          <ContentLoader
            active
            pRows={0}
            tHeight={25}
            containerStyles={styles.itemContainer}
          />
          <View style={styles.itemContainer}>
            <View style={styles.loader}>
              <ContentLoader
                avatar
                aShape="square"
                listSize={3}
                active
                pWidth="100%"
              />
            </View>
            <View style={styles.loader2}>
              <ContentLoader active pRows={0} tHeight={20} tWidth="100%" />
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default React.memo(ProductLoader);
