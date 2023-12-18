import React, { useState } from 'react'

const Form: React.FC = () => {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password:''
    })
    
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password:''
    })
    const [success, setSuccess] = useState('')
    
    const validateForm = () => {
        let valid = true
        const newErrors = {
        firstName: '',
        lastName: '',
        email: '',
        password:''
        }

        if (formData.firstName.trim() === '') {
            valid = false
            newErrors.firstName = 'First Name required'
        }
        if (formData.lastName.trim() === '') {
            valid = false
            newErrors.lastName = 'Last Name required'
        }
        if (formData.password.trim() === '') {
            valid = false
            newErrors.password = 'Password required'
        }
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        if (!emailRegex.test(formData.email)) {
            valid = false
            newErrors.email = 'Invalid Email Address'
        }
        setErrors(newErrors)
        return valid
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            console.log('form submitted')
            setTimeout(() => {
                setSuccess(`Thank you ${formData.firstName + ' ' + formData.lastName}  for your submission. You will be notified at ${formData.email}`)
            }, 500);
            setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password:''
    })
        } else {
            console.log('form validation failed')
        }
        
    //     if (!firstName) {
    //         setError('Please input First Name')
    //     } else if (!lastName) {
    //         setError('Please input Last Name')
    //     } else if (!email || !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    //    setError('Please enter a valid Email address.') 
    //     } else if (!password) {
    //         setError('Please input password')
    //     }  else {
    //          setTimeout(() => {
    //      setSuccess(`Thank you ${firstName + ' ' + lastName}  for your submission. You will be notified at ${email}`)
    //              setEmail('')
    //              setFirstName('')
    //              setLastName('')
    //              setPassword('')
    //      setError('')
    //    }, 1000);
    //     }
        // console.log(firstName, lastName, email, password)
        console.log(formData)
     }
    
  return (
      <div className='px-4 flex flex-col md:w-[50%]'>
          <div className='bg-violet-800 rounded-md py-4 text-center text-white mb-8 md:text-sm'><p><span className='font-bold' >Try it free 7 days</span> then <br className='md:hidden' /> $20/mo. thereafter </p></div>
          <form onSubmit={submitHandler} className='p-5 flex flex-col bg-white rounded-lg'>
              <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value })} placeholder='First Name' className='mb-3 py-2 px-3 border outline-none' />
              {errors ? <p className='text-red-500 p-5 hidden'>{errors.firstName}</p> : ''}
              <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder='Last Name' className='mb-3 py-2 px-3 border outline-none' />
              {errors && <p className='text-red-500 p-5 hidden'>{errors.lastName}</p>}
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Email Address' className='mb-3 py-2 px-3 border outline-none' />
              {errors && <p className='text-red-500 p-5 hidden'>{errors.email}</p>}
              <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder='Password' className='mb-3 py-2 px-3 border outline-none' />
              {errors && <p className='text-red-500 p-5 hidden'>{errors.password}</p>}
              <button type='submit' className='bg-green-500 text-white uppercase p-2'>claim your free trial</button>
          <p className='text-xs text-gray-500'>By clicking the button, <span className='text-red-600'>Terms and Services</span> </p>
          {/* {errors && <p className='text-red-500 p-5 '>{errors.firstName}</p>} */}
          {success && <p className='text-lime-400 pt-8 md:px-[40px]'>{success}</p> }
          </form>
          
    </div>
  )
}

export default Form