import * as React from "react";

import ColdGraySVG from "../../../assets/svg/cold-gray.svg";
import ColdSVG from "../../../assets/svg/cold.svg";
import HotGraySVG from "../../../assets/svg/hot-gray.svg";
import HotSVG from "../../../assets/svg/hot.svg";
import RegularGraySVG from "../../../assets/svg/regular-gray.svg";
import RegularSVG from "../../../assets/svg/regular.svg";
import UpSizeGraySVG from "../../../assets/svg/upsize-gray.svg";
import UpSizeSVG from "../../../assets/svg/upsize.svg";
import styles from "./styles";

const Regular = ({ isSelected }: { isSelected: boolean }): React.ReactElement =>
  isSelected ? (
    <RegularSVG style={styles.alignSelfCenter} width={36} height={36} />
  ) : (
    <RegularGraySVG style={styles.alignSelfCenter} width={36} height={36} />
  );

const UpSize = ({ isSelected }: { isSelected: boolean }): React.ReactElement =>
  isSelected ? (
    <UpSizeSVG style={styles.alignSelfCenter} width={36} height={36} />
  ) : (
    <UpSizeGraySVG style={styles.alignSelfCenter} width={36} height={36} />
  );

const Hot = ({ isSelected }: { isSelected: boolean }): React.ReactElement =>
  isSelected ? (
    <HotSVG style={styles.alignSelfCenter} width={36} height={36} />
  ) : (
    <HotGraySVG style={styles.alignSelfCenter} width={36} height={36} />
  );

const Cold = ({ isSelected }: { isSelected: boolean }): React.ReactElement =>
  isSelected ? (
    <ColdSVG style={styles.alignSelfCenter} width={36} height={36} />
  ) : (
    <ColdGraySVG style={styles.alignSelfCenter} width={36} height={36} />
  );

const ProductVariantIcons = ({
  name,
  isSelected,
}: {
  name: string;
  isSelected: boolean;
}): React.ReactElement => {
  switch (name) {
    case "cold":
      return <Cold isSelected={isSelected} />;
    case "upsize":
      return <UpSize isSelected={isSelected} />;
    case "hot":
      return <Hot isSelected={isSelected} />;
    default:
      return <Regular isSelected={isSelected} />;
  }
};

export default ProductVariantIcons;
