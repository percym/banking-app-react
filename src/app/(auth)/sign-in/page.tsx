import React from 'react'
import AuthForm from '@/components/AuthForm'

const SignIn = async() => {

  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm  formType="sign-in"/>
    </section>
  )
}

export default SignIn
