import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@bruno-ui/react';

export default {
    title: 'Typograph/Heading',
    component: Heading,
    args: {
        children: "Custom title"
    },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: "H1 heading",
        as: "h1"
    },
    parameters: {
        docs: {
            description: {
                story: "Por padrão, o componente Heading renderiza um elemento `h2`. Você pode alterar o elemento renderizado usando a prop `as`."
            }
        }
    }
}
