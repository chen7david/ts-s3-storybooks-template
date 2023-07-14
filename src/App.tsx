import './App.scss'
import { Row } from 'antd'
import { BlazeButtons } from './stories/BlazeButton/BlazeButtons'
import BlazeLogo from './images/blaze.png'

function App() {
  return (
    <>
      <div className='logo-container'>
        <img src={BlazeLogo} className='logo-blaze' />
      </div>
      <Row gutter={12}>
        <BlazeButtons />
      </Row>
    </>
  )
}

export default App
