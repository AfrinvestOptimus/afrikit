import { action } from '@storybook/addon-actions';
import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import AppPasswordInput from '../../../molecules/AppPasswordInput'; // Adjust the path as needed

// Storybook metadata
export default {
    title: 'AppPasswordInput', // Title in Storybook sidebar
    component: AppPasswordInput, // Component to be rendered
    parameters: {
        controls: {
            expanded: true, // Expands the controls panel by default
        },
    },
    argTypes: {
        onChangeText: { action: 'text changed' },
        onFocus: { action: 'focused' },
        onBlur: { action: 'blurred' },
    },
} as Meta<typeof AppPasswordInput>;

// Template for the component
const Template: ComponentStory<typeof AppPasswordInput> = (args) => (
    <View style={{ padding: 20 }}>
        <AppPasswordInput {...args} />
    </View>
);

// Default story
export const Default = Template.bind({});
Default.args = {
    label: 'Password',
    placeholder: 'Enter password...',
    onChangeText: action('Text changed'), // Logs action in Storybook actions panel
};

// Focused input
export const Focused = Template.bind({});
Focused.args = {
    label: 'Focused Password Input',
    placeholder: 'Enter password...',
    onChangeText: action('Text changed'),
    onFocus: action('Input focused'),
};

// Input with Error
export const WithError = Template.bind({});
WithError.args = {
    label: 'Input with Error',
    placeholder: 'Enter password...',
    error: 'Invalid password.',
    onChangeText: action('Text changed'),
};

// Input with Floating Label
export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
    label: 'Floating Label Password Input',
    placeholder: 'Enter password...',
    FloatingLabel: true,
    onChangeText: action('Text changed'),
};

// Input with Password Visibility Toggle
export const PasswordToggle = Template.bind({});
PasswordToggle.args = {
    label: 'Password Input with Toggle',
    placeholder: 'Enter password...',
    onChangeText: action('Text changed'),
    value: 'password123', // Initial password to show toggle button
};

// Input with Clear Button
export const ClearableInput = Template.bind({});
ClearableInput.args = {
    label: 'Clearable Input',
    placeholder: 'Enter password...',
    value: 'Clear me!',
    onChangeText: action('Text changed'),
};
