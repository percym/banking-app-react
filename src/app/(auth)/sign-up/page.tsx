import AuthForm from '@/components/AuthForm'
import React from 'react'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log('signed in user', loggedInUser);
  return (
    
    <div className='flex-center size-full max-sm:px-6'>
     <AuthForm formType="sign-up"/>
  
    </div>
  )
}

export default SignUp
