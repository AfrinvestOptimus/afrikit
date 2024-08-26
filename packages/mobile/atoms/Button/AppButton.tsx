import React, { useMemo } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ButtonColor, buttonColors, ButtonSize, buttonSizes, ButtonState, buttonStates, ButtonVariant, buttonVariants, textVariants } from './button';

interface AppButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  highContrast?: boolean;
  state?: ButtonState;
  iconStart?: boolean;
  iconEnd?: boolean;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  size = 2,
  variant ='solid',
  color ='neutral',
  highContrast = false,
  state = 'default',
  iconStart = false,
  iconEnd = false,
  text,
  onPress,
}) => {
  const sizeStyle = buttonSizes[size];
  const variantStyle = buttonVariants[variant];
  const textStyle = textVariants[variant];
  const colorStyle = highContrast
    ? { color: '#fff', backgroundColor: '#000', borderColor: '#000' }
    : buttonColors[color];
  const stateStyle = buttonStates[state];

  const combinedStyle = StyleSheet.flatten([
    styles.button,
    sizeStyle,
    variantStyle,
    colorStyle,
    stateStyle,
  ]);

  const isRTL = useMemo(() => iconEnd ? 'rtl' : 'ltr', [iconEnd]);

  return (
    <TouchableOpacity
      style={combinedStyle}
      onPress={onPress}
      disabled={state === 'disabled'}
      activeOpacity={state === 'active' ? 0.75 : 1}
      className="rounded-lg"
    >
      <View style={styles.content}>
        {iconStart && <View style={styles.icon}>  </View>}
        <Text style={[styles.text, textStyle]}>{text}</Text>
        {iconEnd && <View style={styles.icon}>  </View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: '#fff'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default AppButton;
