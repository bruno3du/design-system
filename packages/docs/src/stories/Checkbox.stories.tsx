import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Checkbox, CheckboxProps } from '@bruno-ui/react';

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => (
            <Box as="label" css={{ display: "flex", flexDirection: "row", gap: "$2" }}>
                {Story()}
                <Text size="sm" >Accept Terms of Use</Text>
            </Box>
        )
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

