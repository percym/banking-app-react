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


const AuthForm = ({type}:{type:string}) => {
  const [user,setUser]=useState(null)

  const formSchema= z.object({
    email:z.string().email({message:'Enter a valid email address'}),
    password:z.string().min(2,{message:'Enter a valid password'}),
  })
  
  const form = useForm<z.infer<typeof formSchema>>({
  resolver:zodResolver(formSchema),
  defaultValues:{
    email:"",
    password:"",
  },
  })

  function onSubmit(values:z.infer<typeof formSchema>){
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className='form-item'>
               <FormLabel className='form-label'>
                Email
                </FormLabel>
                <div className="flex w-full flex-col">
                <FormControl>
                  <Input  
                    placeholder='Enter your email'
                    className='input-class'
                    {...field}/>
                </FormControl>
                <FormMessage className='form-message'/>
                </div> 
            </div>
            
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <div className='form-item'>
               <FormLabel className='form-label'>
                Password
                </FormLabel>
                <div className="flex w-full flex-col">
                <FormControl>
                  <Input  
                    placeholder='Enter your password'
                    className='input-class'
                    type='password'
                    {...field}/>
                </FormControl>
                <FormMessage className='form-message'/>
                </div> 
            </div>
            
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

        </>
      )}
    </section>
  )
}

export default AuthForm
