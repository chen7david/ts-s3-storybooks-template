import { Typography, Row, Col } from 'antd'
import { BlazeButton, TBlazeButtonType } from './BlazeButton'
import { Table } from 'antd'
import { ButtonProps } from 'antd/lib/button'

const dataSource = ({
  buttonName,
  blazeButtonType,
  buttonProps,
}: {
  buttonName?: string
  blazeButtonType?: TBlazeButtonType
  buttonProps: ButtonProps
}) => {
  return [
    {
      buttonName,
      normal: (
        <BlazeButton
          blazeButtonType={blazeButtonType}
          buttonProps={buttonProps}
          titleProps={{
            title: 'Button Copy',
          }}
        />
      ),
      disabled: (
        <BlazeButton
          blazeButtonType={blazeButtonType}
          buttonProps={{
            ...buttonProps,
            disabled: true,
          }}
          titleProps={{
            title: 'Button Copy',
          }}
        />
      ),
      loading: (
        <BlazeButton
          blazeButtonType={blazeButtonType}
          buttonProps={{
            ...buttonProps,
            loading: true,
          }}
          titleProps={{
            title: 'Button Copy',
          }}
        />
      ),
    },
  ]
}

export const BlazeButtons = () => {
  const titleLevel = 3
  const colSpan = 8

  const typeColumn = { title: 'Type', dataIndex: 'buttonName', key: 'buttonName' }

  const columns = [
    { title: 'Normal', dataIndex: 'normal', key: 'normal' },
    { title: 'Disabled', dataIndex: 'disabled', key: 'disabled' },
    { title: 'Loading', dataIndex: 'loading', key: 'loading' },
  ]

  return (
    <>
      <Row>
        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Filled Buttons (large)</Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonName: 'Retail',
                buttonProps: {
                  size: 'large',
                  type: 'primary',
                },
                blazeButtonType: 'retail',
              }),
              ...dataSource({
                buttonName: 'Dispatch',
                buttonProps: {
                  size: 'large',
                  type: 'primary',
                },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonName: 'BlazePay',
                buttonProps: {
                  size: 'large',
                  type: 'primary',
                },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonName: 'Manufacturing',
                buttonProps: {
                  size: 'large',
                  type: 'primary',
                },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonName: 'Grow',
                buttonProps: {
                  size: 'large',
                  type: 'primary',
                },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonName: 'Distro',
                buttonProps: {
                  size: 'large',
                  type: 'primary',
                },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonName: 'Danger',
                buttonProps: {
                  size: 'large',
                  type: 'primary',
                },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonName: 'Black',
                buttonProps: {
                  size: 'large',
                  type: 'primary',
                },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white w-100'}
            columns={[typeColumn, ...columns]}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>

        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Outlined Buttons (large) </Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'default',
                },
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'ghost',
                },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'ghost',
                },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'ghost',
                },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'ghost',
                },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'ghost',
                },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'ghost',
                },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'ghost',
                },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white'}
            columns={columns}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>

        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Text Buttons (large)</Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'link',
                },
                blazeButtonType: 'retail',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'link',
                },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'link',
                },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'link',
                },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'link',
                },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'link',
                },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'link',
                },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'large',
                  type: 'link',
                },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white'}
            columns={columns}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Filled Buttons</Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonName: 'Retail',
                buttonProps: { type: 'primary' },
                blazeButtonType: 'retail',
              }),
              ...dataSource({
                buttonName: 'Dispatch',
                buttonProps: { type: 'primary' },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonName: 'BlazePay',
                buttonProps: { type: 'primary' },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonName: 'Manufacturing',
                buttonProps: { type: 'primary' },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonName: 'Grow',
                buttonProps: { type: 'primary' },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonName: 'Distro',
                buttonProps: { type: 'primary' },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonName: 'Danger',
                buttonProps: { type: 'primary' },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonName: 'Black',
                buttonProps: { type: 'primary' },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white'}
            columns={[typeColumn, ...columns]}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>

        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Outlined Buttons</Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonProps: {
                  type: 'default',
                },
              }),
              ...dataSource({
                buttonProps: {
                  type: 'ghost',
                },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'ghost',
                },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'ghost',
                },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'ghost',
                },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'ghost',
                },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'ghost',
                },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'ghost',
                },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white'}
            columns={columns}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>

        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Text Buttons</Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonProps: {
                  type: 'link',
                },
                blazeButtonType: 'retail',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white'}
            columns={columns}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Filled Buttons (small)</Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonName: 'Retail',
                buttonProps: {
                  size: 'small',
                  type: 'primary',
                },
                blazeButtonType: 'retail',
              }),
              ...dataSource({
                buttonName: 'Dispatch',
                buttonProps: {
                  size: 'small',
                  type: 'primary',
                },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonName: 'BlazePay',
                buttonProps: {
                  size: 'small',
                  type: 'primary',
                },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonName: 'Manufacturing',
                buttonProps: {
                  size: 'small',
                  type: 'primary',
                },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonName: 'Grow',
                buttonProps: {
                  size: 'small',
                  type: 'primary',
                },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonName: 'Distro',
                buttonProps: {
                  size: 'small',
                  type: 'primary',
                },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonName: 'Danger',
                buttonProps: {
                  size: 'small',
                  type: 'primary',
                },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonName: 'Black',
                buttonProps: {
                  size: 'small',
                  type: 'primary',
                },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white'}
            columns={[typeColumn, ...columns]}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>

        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Outlined Buttons (small)</Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonProps: {
                  type: 'default',
                  size: 'small',
                },
              }),
              ...dataSource({
                buttonProps: {
                  size: 'small',
                  type: 'ghost',
                },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'small',
                  type: 'ghost',
                },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'small',
                  type: 'ghost',
                },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'small',
                  type: 'ghost',
                },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'small',
                  type: 'ghost',
                },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'small',
                  type: 'ghost',
                },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonProps: {
                  size: 'small',
                  type: 'ghost',
                },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white'}
            columns={columns}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>

        <Col span={colSpan}>
          <Typography.Title level={titleLevel}>Text Buttons (small)</Typography.Title>

          <Table
            dataSource={[
              ...dataSource({
                buttonProps: {
                  type: 'link',
                  size: 'small',
                },
                blazeButtonType: 'retail',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                  size: 'small',
                },
                blazeButtonType: 'dispatch',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                  size: 'small',
                },
                blazeButtonType: 'blazepay',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                  size: 'small',
                },
                blazeButtonType: 'manufacturing',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                  size: 'small',
                },
                blazeButtonType: 'grow',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                  size: 'small',
                },
                blazeButtonType: 'distro',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                  size: 'small',
                },
                blazeButtonType: 'danger',
              }),
              ...dataSource({
                buttonProps: {
                  type: 'link',
                  size: 'small',
                },
                blazeButtonType: 'black',
              }),
            ]}
            className='no-background-table show-horizontal-scrollbar'
            rowClassName={() => 'background-white'}
            columns={columns}
            pagination={false}
            scroll={{ x: true }}
          />
        </Col>
      </Row>
    </>
  )
}
