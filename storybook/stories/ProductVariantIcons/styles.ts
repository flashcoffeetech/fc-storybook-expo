import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  alignSelfCenter: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  alignSelfCenter: {
    alignSelf: 'center',
  },
});

export default styles;
