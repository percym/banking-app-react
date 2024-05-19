'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import {z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'


const AuthForm = ({type}:{type:string}) => {
  const [user,setUser]=useState(null)


  
  const form = useForm<z.infer<typeof authFormSchema>>({
  resolver:zodResolver(authFormSchema),
  defaultValues:{
    email:"",
    password:"",
  },
  })

  function onSubmit(values:z.infer<typeof authFormSchema >){
    console.log(values);
  }
  return (
    <section className='auth-form'>
      <header className='flex flex-col gap5-5 md:gap-8'>
      <Link href="/" className="cursor-pointer items-center gap-1 flex">
        <Image
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt="logo" />
        </Link>
          <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user? 'Link account':type === 'sign-in'
              ?'Sign In' : 'Sign Out'}
            </h1>
            <p className="text-16 font-normal tex-gray-600">
            {user? 'Link your account to get started': 'Please enter your details'}
            </p> 
          </div>
      </header>
      {user? (
        <div className='flex flex-col gap-4'>
          {/* Plaid link  account component */}
        </div>
      ):(
        <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomInput 
                control={form.control} 
                name='email' 
                label='Email' 
                placeholder='Enter email address' 
                type='email'/>
            <CustomInput
                control={form.control} 
                name='password' 
                label='Password' 
                placeholder='Enter password' 
                type='password'/>
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        </>
      )}
    </section>
  )
}

export default AuthForm
