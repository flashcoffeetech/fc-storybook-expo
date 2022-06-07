enum ETextAlign {
  auto,
  left,
  right,
  center,
  justify,
}

enum ETextStatus {
  basic,
  info,
  primary,
  success,
  hint,
  danger,
  warning,
}

enum ETextVariant {
  largeTitle,
  headline1,
  headline2,
  headline3,
  headline4,
  headline5,
  body1,
  body2,
  body3,
  body4,
  body5,
  caption1,
  caption2,
  caption3,
  tagline1,
  tagline2,
  tagline3,
}

export type TextStatus = keyof typeof ETextStatus;
type TextAlign = keyof typeof ETextAlign;
type TextVariant = keyof typeof ETextVariant;
type FontWeight = 'normal' | 'bold' | '100' | '400' | '500' | '600';
type EllipsizeMode = 'head' | 'middle' | 'tail' | 'clip';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type AlignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
type TextDecorationLine =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'underline line-through';

export interface IText {
  adjustsFontSizeToFit?: boolean;
  children?: string | React.ReactElement[] | React.ReactElement;
  testID?: string;
  color?: string;
  flex?: number;
  flexWrap?: FlexWrap;
  textAlign?: TextAlign;
  variant?: TextVariant;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  fontWeight?: FontWeight;
  height?: number;
  numberOfLines?: number;
  ellipsizeMode?: EllipsizeMode;
  lineHeight?: number;
  status?: TextStatus;
  width?: number | string;
  alignSelf?: AlignSelf;
  textDecorationLine?: TextDecorationLine;
  onPress?: () => void;
}
