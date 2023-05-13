import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@bruno-ui/react';

export default {
    title: 'Datadisplay/Avatar',
    component: Avatar,
    args: {
        src: "https://avatars.githubusercontent.com/u/83365446?v=4",
        alt: "Bruno",
    },
    argTypes: {
        src: {
            control: {
                type: "text"
            }
        },
        alt: {
            control: {
                type: "text"
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
        alt: undefined,
    }
}
