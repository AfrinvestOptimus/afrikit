import { action } from '@storybook/addon-actions';
import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import AppPhoneInput from '../../../molecules/AppPhoneInput';



export default {
    title: 'AppPhoneInput', // Title in Storybook sidebar
    component: AppPhoneInput, // Component to be rendered
    parameters: {
        controls: {
            expanded: true, // Makes controls panel expanded by default
        },
    },
    argTypes: {
        onChangeText: { action: 'text changed' },
        onFocus: { action: 'focused' },
        onBlur: { action: 'blurred' },
    },
} as Meta<typeof AppPhoneInput>;
// Template for the component
const Template: ComponentStory<typeof AppPhoneInput> = (args) => (
    <View style={{ padding: 20 }}>
        <AppPhoneInput {...args} />
    </View>
);
// Default story
export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    placeholder: 'Enter number...',
    onChangeText: action('Text changed'), // Logs action in Storybook actions panel
};

// Focused input
export const Focused = Template.bind({});
Focused.args = {
    label: 'Focused Input',
    placeholder: 'Enter text...',
    onChangeText: action('Text changed'),
    onFocus: action('Input focused'),
};

// Input with Error
export const WithError = Template.bind({});
WithError.args = {
    label: 'Input with Error',
    placeholder: 'Enter text...',
    error: 'This field is required.',
    onChangeText: action('Text changed'),
};
// Multiline Input
export const Multiline = Template.bind({});
Multiline.args = {
    label: 'Multiline Input',
    placeholder: 'Enter multiple lines of text...',
    multiline: true,
    numberOfLines: 4,
    onChangeText: action('Text changed'),
};

// Input with Floating Label
export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
    label: 'Floating Label Input',
    placeholder: 'Enter text...',
    FloatingLabel: true,
    onChangeText: action('Text changed'),
};

// Input with Clear Button
export const ClearableInput = Template.bind({});
ClearableInput.args = {
    label: 'Clearable Input',
    placeholder: 'Type something...',
    value: 'Clear me!',
    onChangeText: action('Text changed'),
};

