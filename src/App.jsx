import { Button, ButtonLinks }from './components/reuseable/button.jsx'
import TextComponent from './components/reuseable/text.jsx'
import './index.css'


function App() {

  return (
    <>
      <div className=' text-center font-inter m-2'>
        <h1 className='font-inter text-center font-bold text-[100px] text-[#646cff] mt-20'> RCF Followup Website</h1>
       
        <p className='text-center '>
          Storybook is the most popular UI component development tool for React, Vue, and Angular. It helps you develop and design UI components outside your app in an isolated environment. Learn Storybook to create bulletproof UI components, along the way you’ll build an app UI from scratch.
        </p>
        <TextComponent text='EbunOluwa Oni' featured className= 'text-rose-500' />
        <ButtonLinks size='lg' color='grey'> woosh</ButtonLinks>
        
        <Button width='80%' background='red'>Get Started </Button>
      </div>   
    </>
  )
}

export default App
