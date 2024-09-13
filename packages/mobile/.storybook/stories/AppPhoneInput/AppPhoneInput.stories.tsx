// stories/AppPhoneInput.stories.tsx

import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';
import AppPhoneInput from '../../../molecules/AppPhoneInput'; // Adjust the path as needed
import { AppPhoneInputProps } from '../../../types/atoms';

export default {
    title: 'AppPhoneInput',
    component: AppPhoneInput,
    argTypes: {
        onBlur: { action: 'blurred' },
        onFocus: { action: 'focused' },
        onChangeText: { action: 'text changed' },
        error: { control: 'text' },
        label: { control: 'text' },
        value: { control: 'text' },
        FloatingLabel: { control: 'boolean' },
        multiline: { control: 'boolean' },
    },
} as Meta<typeof AppPhoneInput>;

const Template: ComponentStory<typeof AppPhoneInput> = (args: AppPhoneInputProps) => <AppPhoneInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Phone Number',
    value: '',
    error: '',
    FloatingLabel: true,
    multiline: false,
};

export const WithError = Template.bind({});
WithError.args = {
    label: 'Phone Number',
    value: '',
    error: 'Invalid phone number',
    FloatingLabel: true,
    multiline: false,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
    label: 'Phone Number',
    value: '+2348123456789',
    error: '',
    FloatingLabel: true,
    multiline: false,
};

export const NoFloatingLabel = Template.bind({});
NoFloatingLabel.args = {
    label: 'Phone Number',
    value: '',
    error: '',
    FloatingLabel: false,
    multiline: false,
};
