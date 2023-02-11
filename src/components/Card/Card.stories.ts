/*
Author: chankruze (chankruze@gmail.com)
Created: Sat Feb 11 2023 21:40:45 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2023 and beyond
*/

import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args:https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Card Title",
    description: "This is a card",
  },
};
