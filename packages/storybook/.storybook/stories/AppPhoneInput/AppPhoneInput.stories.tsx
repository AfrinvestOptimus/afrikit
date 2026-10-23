// stories/AppPhoneInput.stories.tsx

import { AppPhoneInput, AppPhoneInputProps } from 'afrikit-mobile'
import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';



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
        floatingLabel: { control: 'boolean' },
        multiline: { control: 'boolean' },
    },
} as Meta<typeof AppPhoneInput>;

const Template: ComponentStory<typeof AppPhoneInput> = (args: AppPhoneInputProps) => <AppPhoneInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Phone Number',
    value: '',
    error: '',
    floatingLabel: true,
    multiline: false,
};

export const WithError = Template.bind({});
WithError.args = {
    label: 'Phone Number',
    value: '',
    error: 'Invalid phone number',
    floatingLabel: true,
    multiline: false,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
    label: 'Phone Number',
    value: '+2348123456789',
    error: '',
    floatingLabel: true,
    multiline: false,
};

export const NoFloatingLabel = Template.bind({});
NoFloatingLabel.args = {
    label: 'Phone Number',
    value: '',
    error: '',
    floatingLabel: false,
    multiline: false,
};
