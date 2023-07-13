import type { Meta, StoryObj } from '@storybook/react'

import { BlazeButton } from './BlazeButton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Blaze Button',
  component: BlazeButton,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof BlazeButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    buttonProps: { onClick: () => {}, type: 'primary' },
  },
}

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// }

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// }

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// }
