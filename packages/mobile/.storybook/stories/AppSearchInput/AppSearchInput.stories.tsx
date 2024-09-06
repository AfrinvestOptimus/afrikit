import { action } from '@storybook/addon-actions';
import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import AppSearchInput from '../../../molecules/AppSearchInput'; // Adjust the path as needed

// Storybook metadata
export default {
    title: 'AppSearchInput', // Title in Storybook sidebar
    component: AppSearchInput, // Component to be rendered
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
} as Meta<typeof AppSearchInput>;

// Template for the component
const Template: ComponentStory<typeof AppSearchInput> = (args) => (
    <View style={{ padding: 20 }}>
        <AppSearchInput {...args} />
    </View>
);

// Default story
export const Default = Template.bind({});
Default.args = {
    placeholder: 'Search...',
    onChangeText: action('Text changed'), // Logs action in Storybook actions panel
};

// Focused input
export const Focused = Template.bind({});
Focused.args = {
    placeholder: 'Search...',
    onChangeText: action('Text changed'),
    onFocus: action('Input focused'),
};

// Input with Clear Button
export const ClearableInput = Template.bind({});
ClearableInput.args = {
    placeholder: 'Search...',
    value: 'Clear me!',
    onChangeText: action('Text changed'),
};
