import { Icon, IconElement, IconProps } from "@ui-kitten/components";
import React from "react";
import { ImageProps } from "react-native";

import * as appTheme from "./custom-theme.json";
import Apple from "./svg/apple.svg";
import AccountCircle from "./svg/account-circle.svg";
import Google from "./svg/google.svg";
import Login from "./svg/login.svg";
import Timer from "./svg/timer.svg";
import ShoppingBag from "./fontawesome/shopping-bag.svg";
import Motorcycle from "./fontawesome/motorcycle.svg";
import Crosshairs from "./fontawesome/crosshairs.svg";
import Building from "./svg/building.svg";
import User from "./svg/user.svg";
import ClipBoard from "./svg/clipboard.svg";

export const SmartPhoneIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="smartphone-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);
export const EditIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="edit-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const WifiOn = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="wifi-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const WifiOff = ({
  width,
  height,
  marginHorizontal,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={[style, { marginHorizontal }]}
    width={width || 28}
    height={height || 28}
    name="wifi-off-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const UmbrellaIcon = ({
  width,
  height,
  marginHorizontal,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={[style, { marginHorizontal }]}
    width={width || 28}
    height={height || 28}
    name="umbrella"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const UmbrellaOutlineIcon = ({
  width,
  height,
  marginHorizontal,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={[style, { marginHorizontal }]}
    width={width || 28}
    height={height || 28}
    name="umbrella-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const MapIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="map-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const CloseIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="close"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const NextIcon = ({
  width,
  height,
  fill,
  style = {},
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="arrow-ios-forward"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const BackIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="arrow-ios-back"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const ArrowLeftIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="arrow-circle-left-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const ArrowRightIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="arrow-circle-right-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const LayoutIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="layout"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const PersonIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="person"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const MoreVerticalIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="more-vertical"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const LogoutIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="log-out"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const InfoIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="info"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const InfoOutlineIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="info-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const AlertTriangleIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="alert-triangle"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const EyeIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="eye"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const EyeOffIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="eye-off"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const MenuIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="menu"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const HomeIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="home"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const CheckMarkIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="checkmark-circle-2"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const DoneIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="checkmark"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const DoneAllIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="done-all"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const GridIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="grid"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const SearchIcon = ({
  testID,
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    testID={testID}
    style={style}
    width={width || 28}
    height={height || 28}
    name="search"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const PlusIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="plus"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const MinIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="minus"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const FlashIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="flash"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const BellIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="bell-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const StarIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="star"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const PhoneIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="phone"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const PinIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="pin"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const PinOutlineIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="pin-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const ShoppingCartIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="shopping-cart"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const CarIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="car"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const NavigationIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="navigation-2"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const EmailIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="email-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const MotorcycleIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Motorcycle
    style={style}
    width={width || 15}
    height={height || 15}
    fill={fill || appTheme["color-info-100"]}
  />
);

export const ShoppingBagIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <ShoppingBag
    style={style}
    width={width || 15}
    height={height || 15}
    fill={fill || appTheme["color-primary-100"]}
  />
);

export const CrosshairsIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Crosshairs
    style={style}
    width={width || 15}
    height={height || 15}
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const GoogleIcon = (): IconElement => <Google />;
export const AppleIcon = (): IconElement => <Apple />;
export const TimerIcon = (): IconElement => <Timer />;
export const LoginIcon = (): IconElement => <Login />;
export const BuildingIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <Building style={style} width={width || 24} height={height || 24} />
);
export const UserIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <User style={style} width={width || 24} height={height || 24} />
);

export const ClipBoardIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <ClipBoard style={style} width={width || 24} height={height || 24} />
);

export const AccountIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <AccountCircle
    style={style}
    width={width || 24}
    height={height || 24}
    fill={fill || appTheme["color-success-500"]}
  />
);

export const FacebookIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="facebook"
    fill={fill || "#fff"}
  />
);

export const RefreshIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 24}
    height={height || 24}
    name="refresh-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const TrashIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="trash-2-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const ClockIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="clock-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const CardIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="credit-card-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const GlobeIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="globe-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const BookIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="file-text-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const AwardIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="award-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const GiftIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="gift-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const QuestionIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="question-mark-circle-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const ClearIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="close-circle-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const CloseCircleIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="close-circle"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const ClockFillIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="clock"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const CalendarIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="calendar-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const RadioButtonOnIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="radio-button-on"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const PeopleIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="people-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);

export const PhoneOutlineIcon = ({
  width,
  height,
  fill,
  style,
}: IconProps | ImageProps): IconElement => (
  <Icon
    style={style}
    width={width || 28}
    height={height || 28}
    name="phone-outline"
    fill={fill || appTheme["color-primary-500"]}
  />
);
