import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { AppTitleAtomProps } from "../../../types/atoms";
import AppTitle from "../../../atoms/AppTitle"; // Ensure this import is correct for your setup

const meta: Meta<typeof AppTitle> = {
  title: "AppTitle",
  component: AppTitle,
  decorators: [
    (Story) => (
      <View className="px-md">
        <Story />
      </View>
    ),
  ],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    align: {
      control: "select",
      options: ["left", "center"],
    },
    titlePosition: {
      control: "select",
      options: ["top", "bottom"],
    },
    spacing: {
      control: "select",
      options: [1, 2, 3],
    },
    hasSubtitle: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof AppTitle>;

const defaultProps: AppTitleAtomProps = {
  title: "Sample Title",
  subtitle: "This is a sample subtitle",
  align: "left",
  titlePosition: "top",
  spacing: 2,
  hasSubtitle: true,
};

export const Default: Story = {
  args: defaultProps,
};

export const CenteredAlignment: Story = {
  args: {
    ...defaultProps,
    align: "center",
  },
};

export const BottomTitlePosition: Story = {
  args: {
    ...defaultProps,
    titlePosition: "bottom",
  },
};

export const LargeSpacing: Story = {
  args: {
    ...defaultProps,
    spacing: 3,
  },
};

export const WithoutSubtitle: Story = {
  args: {
    hasSubtitle: false,
    title: "Title without subtitle",
    align: "left",
  },
};

export const LongTitle: Story = {
  args: {
    ...defaultProps,
    title: "This is a very long title that might wrap to multiple lines",
  },
};

export const LongSubtitle: Story = {
  args: {
    ...defaultProps,
    subtitle:
      "This is a very long subtitle that demonstrates how the component handles extended text in the subtitle area, potentially wrapping to multiple lines.",
  },
};

export const AllCustomProps: Story = {
  args: {
    title: "Custom Title",
    subtitle: "Custom Subtitle",
    align: "center",
    titlePosition: "top",
    spacing: 1,
    hasSubtitle: true,
  },
};
