import { Story, Meta } from '@storybook/react';
import { UsefulComps, UsefulCompsProps } from './UsefulComps';

export default {
    component: UsefulComps,
    title: 'UsefulComps',
} as Meta;

const Template: Story<UsefulCompsProps> = (args) => <UsefulComps {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
