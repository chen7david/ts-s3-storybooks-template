import type { Meta, StoryObj } from '@storybook/react'

import { BlazeButton } from './BlazeButton'

const blazeButtonTypes = ["retail",
"dispatch",
"blazepay",
"manufacturing",
"grow",
"distro",
"danger",
"black"]
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Blaze Components/Blaze Button',
  component: BlazeButton,
  tags: ['autodocs'],
  args: {
    buttonProps: {
      type: 'primary',
      onClick: () => {
        alert('Blaze Button clicked')
      },
    },
    titleProps: { title: 'Blaze Button' },
  },
  argTypes: {
    buttonProps: {
      description: '**Ant Design Button props* **',
      table: {
        type: {
          summary: 'onClick|icon|disabled|type|size',
        },
      },
    },
  },
} satisfies Meta<typeof BlazeButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RetailNormal: Story = {
  name: 'Retail - Normal',
  args: {
    // buttonProps: {
    //   onClick: () => {
    //     alert('Hi')
    //   },
    //   type: 'ghost',
    // },
    titleProps: { title: 'Blaze button type Retail' },
    blazeButtonType: 'retail',
  },
}

export const Distro: Story = {
  args: {
    // buttonProps: {
    //   onClick: () => {
    //     alert('Hi')
    //   },
    //   type: 'ghost',
    // },
    titleProps: { title: 'Blaze button type Distro' },
    blazeButtonType: 'distro',
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
