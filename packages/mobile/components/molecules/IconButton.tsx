import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import Icon from 'react-native-remix-icon';

interface IconButtonProps extends PressableProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  iconSize = 24,
  iconColor = '#000',
  ...props
}) => {
  return (
    <Pressable style={styles.button} className={`flex-col justify-center items-center`} {...props}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 48
  },
});


export default IconButton;
