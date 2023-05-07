import { Box, BoxProps } from '@bruno-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Box',
    component: Box,
    args: {
        children: (
            <>
                <span>Testando o elemento box</span>
            </>
        )
    },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
