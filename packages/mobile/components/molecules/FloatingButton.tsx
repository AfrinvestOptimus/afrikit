// components/FloatingButton.tsx
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-remix-icon'

interface FloatingButtonProps {
  onPress: () => void
  backgroundColor?: string
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onPress, backgroundColor = 'black' }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor }]}>
      <Icon name="arrow-right-line" size={32} color="#FFFFFF" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 16,
    top: '40%',
    transform: [{ translateY: -28 }],
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
})

export default FloatingButton
