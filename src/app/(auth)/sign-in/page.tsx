import React from 'react'
import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';


const SignIn = async() => {
  const loggedInUser = await getLoggedInUser();
  console.log('signed in user', loggedInUser);
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm  formType="sign-in"/>
    </section>
  )
}

export default SignIn
