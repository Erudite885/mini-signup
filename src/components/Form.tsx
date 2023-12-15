import React, { useState } from 'react'

const Form: React.FC = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!firstName) {
            setError('Please input First Name')
        } else if (!lastName) {
            setError('Please input Last Name')
        } else if (!email || !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
       setError('Please enter a valid Email address.') 
        } else if (!password) {
            setError('Please input password')
        }  else {
             setTimeout(() => {
         setSuccess(`Thank you ${firstName + ' ' + lastName}  for your submission. You will be notified at ${email}`)
                 setEmail('')
                 setFirstName('')
                 setLastName('')
                 setPassword('')
         setError('')
       }, 1000);
        }
        console.log(firstName, lastName, email, password)
     }
    
  return (
      <div className='px-4 flex flex-col md:w-[50%]'>
          <div className='bg-violet-800 rounded-md py-4 text-center text-white mb-8 md:text-sm'><p><span className='font-bold' >Try it free 7 days</span> then <br className='md:hidden' /> $20/mo. thereafter </p></div>
          <form onSubmit={submitHandler} className='p-5 flex flex-col bg-white rounded-lg'>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' className='mb-3 py-2 border outline-none' />
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' className='mb-3 py-2 border outline-none' />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='mb-3 py-2 border outline-none' />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='mb-3 py-2 border outline-none' />
              <button type='submit' className='bg-green-500 text-white uppercase p-2'>claim your free trial</button>
          <p className='text-xs text-gray-500'>By clicking the button, <span className='text-red-600'>Terms and Services</span> </p>
          </form>
           {error && <p className='text-red-500 p-5 '>{error}</p>}
          {success && !error && <p className='text-lime-400 pt-8 md:px-[40px]'>{ success}</p> }
          
    </div>
  )
}

export default Form