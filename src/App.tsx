import React from 'react'
import SignUpComponent from './components/SignUpComponent'

const App:  React.FC = () => {
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh] bg-rose-500'>
      <SignUpComponent />
    </div>
  )
}

export default App