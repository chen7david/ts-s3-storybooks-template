import type { Meta, StoryObj } from '@storybook/react'
import { MessageOutlined } from '@ant-design/icons'

import { BlazeButton, TBlazeButtonType } from './BlazeButton'
import { Space } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

const blztypes: TBlazeButtonType[] = [
  'retail',
  'dispatch',
  'blazepay',
  'manufacturing',
  'grow',
  'distro',
  'danger',
  'black',
]
const antBtnTypes = ['link', 'ghost', 'default', 'primary']

const antBtnSizes = ['small', 'medium', 'large']

interface IBlazeButtonStoryProps {
  buttonType: 'link' | 'ghost' | 'default' | 'primary'
  disabled: boolean
  loading: boolean
  size: SizeType
  title: string
  widthBreakPoint: number
  blazeButtonType: TBlazeButtonType
  onClick: () => void
}

const argTypes = {
  buttonProps: { table: { disable: true } },
  titleProps: { table: { disable: true } },
  buttonType: {
    name: 'buttonProps.type',
    description: 'Ant Design Button prop: **type**',
    table: {
      type: {
        summary: antBtnTypes.join('|'),
      },
    },
    control: 'select',
    options: ['link', 'ghost', 'default', 'primary'],
  },
  disabled: {
    name: 'buttonProps.disabled',
    description: 'Ant Design Button prop: **disabled**',
    table: {
      defaultValue: { summary: 'false' },
      type: {
        summary: ['true', 'false'],
      },
    },
    control: 'boolean',
  },
  loading: {
    name: 'buttonProps.loading',
    description: 'Ant Design Button prop: **loading**',
    table: {
      defaultValue: { summary: 'false' },
      type: {
        summary: ['true', 'false'],
      },
    },
    control: 'boolean',
  },
  size: {
    name: 'buttonProps.size',
    description: 'Ant Design Button prop: **size**',
    table: {
      defaultValue: { summary: 'medium' },
      type: {
        summary: antBtnSizes.join('|'),
      },
    },
    control: 'radio',
    options: antBtnSizes,
  },
  title: {
    name: 'titleProps.title',
    description: 'Button text',
    table: {
      type: {
        summary: 'string',
      },
    },
    control: 'text',
  },
}

const argDefault = {
  disabled: false,
  buttonType: 'primary',
  loading: false,
  title: 'Blaze button',
  onClick: () => {
    alert('Blaze Button clicked')
  },
  size: 'medium',
}

export const BlazeButtonMeta = {
  name: 'Blaze Button',
  args: argDefault,
  argTypes: { ...argTypes, blazeButtonType: 'retail' },
  render: (args: IBlazeButtonStoryProps) => (
    <BlazeButton
      buttonProps={{
        type: args.buttonType,
        disabled: args.disabled,
        loading: args.loading,
        size: args.size,
        onClick: args.onClick,
      }}
      titleProps={{ title: args.title }}
      blazeButtonType={args.blazeButtonType}
    />
  ),
}

export const BlazeButtonTypes = {
  args: argDefault,
  argTypes: { ...argTypes, blazeButtonType: { table: { disable: true } } },
  render: (args: IBlazeButtonStoryProps) => (
    <Space style={{ display: 'flex', flexWrap: 'wrap' }}>
      {blztypes.map((blztype, index) => {
        return (
          <BlazeButton
            key={index}
            buttonProps={{
              type: args.buttonType,
              disabled: args.disabled,
              loading: args.loading,
              onClick: args.onClick,
            }}
            blazeButtonType={blztype}
            titleProps={{ title: `Blaze ${blztype} Button` }}
          />
        )
      })}
    </Space>
  ),
}

export default {
  title: 'Blaze Components/Blaze Button',
  component: BlazeButton,
  tags: ['autodocs'],
}
