import React from "react";
import "./preview";

import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args}>LOL</Button>;

export const PrimarySolidButton = Template.bind({});

PrimarySolidButton.args = {
  fill: "solid",
};

export const PrimaryOutlineButton = Template.bind({});

PrimaryOutlineButton.args = {
  fill: "outline",
};

export const PrimaryClearButton = Template.bind({});

PrimaryClearButton.args = {
  fill: "clear",
};
