import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@bruno-ui/react';

export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        children: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}


export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Strong text",
        as: "strong"
    }
}