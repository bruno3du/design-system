import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextInput, TextInputProps } from '@bruno-ui/react';

export default {
    title: 'Form/TextInput',
    component: TextInput,
    args: {},
    decorators: [
        (Story) => (
            <Box as="label" css={{ display: "flex", flexDirection: "column", gap: "$2" }}>
                <Text size="sm" >Email Address</Text>
                {Story()}
            </Box>
        )
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Type something...',
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    }
}