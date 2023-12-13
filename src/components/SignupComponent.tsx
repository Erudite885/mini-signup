import React from 'react'
import Form from './form'
import Description from './Description'

const SignUpComponent: React.FC = () => {
  return (
      <section className='flex '>
          <Description />
          <Form />
    </section>
  )
}

export default SignUpComponent