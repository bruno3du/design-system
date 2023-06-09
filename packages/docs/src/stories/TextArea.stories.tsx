import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps } from '@bruno-ui/react';

export default {
    title: 'Form/TextArea',
    component: TextArea,
    args: {},
    decorators: [
        (Story) => (
            <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
                <Text size="sm" >Observations</Text>
                {Story()}
            </Box>
        )
    ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Type something...',
    }
}

export const WithPrefix: StoryObj<TextAreaProps> = {
    args: {
        prefix: 'cal.com/'
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
    }
}