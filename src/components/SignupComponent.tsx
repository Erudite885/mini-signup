import React from 'react'
import Description from './Description'
import Form from './form'

const SignUpComponent: React.FC = () => {
  return (
      <div className='flex items-center justify-center md:justify-between flex-col md:flex-row md:pl-12 md:pr-20'>
          <Description />
          <Form />
    </div>
  )
}

export default SignUpComponent