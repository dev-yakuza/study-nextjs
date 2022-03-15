import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SampleButton } from '.';

export default {
  title: 'Example/SampleButton',
  component: SampleButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SampleButton>;

const Template: ComponentStory<typeof SampleButton> = (args) => (
  <SampleButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
