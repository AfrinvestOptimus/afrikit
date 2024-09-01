import React from 'react';
import { View } from 'react-native';
import { AppTopBar, AppTopBarProps } from '../../../molecules/AppTopBar';


export default {
  title: 'AppTopBar',
  component: AppTopBar,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'centered', 'large', 'menu', 'small', 'small-centered', 'large-centered', 'large2-centered'],
      defaultValue: 'default',
    },
    title: {
      control: 'text',
      defaultValue: 'Product',
    },
    subtitle: {
      control: 'text',
      defaultValue: 'Subtitle here',
    },
    showLeftIcon: {
      control: 'boolean',
      defaultValue: true,
    },
    showRightIcon1: {
      control: 'boolean',
      defaultValue: true,
    },
    showRightIcon2: {
      control: 'boolean',
      defaultValue: true,
    },
    showRightIcon3: {
      control: 'boolean',
      defaultValue: true,
    },
    onLeftIconPress: {
      action: 'onLeftIconPress',
    },
    onRightIconPress1: {
      action: 'onRightIconPress1',
    },
    onRightIconPress2: {
      action: 'onRightIconPress2',
    },
    onRightIconPress3: {
      action: 'onRightIconPress3',
    },
  },
};

// Create a Template with color scheme handling
const Template = (args: AppTopBarProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', padding: 16 }}>
      <AppTopBar {...args} />
    </View>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  title: 'Product',
};

export const Centered = Template.bind({});
Centered.args = {
  variant: 'centered',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
};

export const Large2 = Template.bind({});
Large2.args = {
  variant: 'large2',
};

export const Menu = Template.bind({});
Menu.args = {
  variant: 'menu',
};

export const SmallCentered = Template.bind({});
SmallCentered.args = {
  variant: 'small-centered',
};

export const LargeCentered = Template.bind({});
LargeCentered.args = {
  variant: 'large-centered',
};

export const Large2Centered = Template.bind({});
Large2Centered.args = {
  variant: 'large2-centered',
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  subtitle: undefined,
};

export const WithoutRightIcon1 = Template.bind({});
WithoutRightIcon1.args = {
  showRightIcon1: false,
};

export const WithoutRightIcon2 = Template.bind({});
WithoutRightIcon2.args = {
  showRightIcon2: false,
};

export const WithoutRightIcon3 = Template.bind({});
WithoutRightIcon3.args = {
  showRightIcon3: false,
};

export const FullFeatures = Template.bind({});
FullFeatures.args = {
  variant: 'large',
  showLeftIcon: true,
  showRightIcon1: true,
  showRightIcon2: true,
  showRightIcon3: true,
};
