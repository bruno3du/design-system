import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@bruno-ui/react';

export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        size: "md",
        children: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    argTypes: {
        size: {
            options: ["xxs", "xs", "sm", "md", "lg", "2xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
            control: {
                type: 'inline-radio',
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}


export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: "Strong text",
        as: "strong",
        size: "sm"
    }
}