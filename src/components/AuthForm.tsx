"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import {z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
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
import CustomInput from "./CustomInput"
import { authFormSchema } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import SignUp from "@/app/(auth)/sign-up/page"
import { useRouter } from "next/navigation"
import {signUp, signIn} from "../lib/actions/user.actions"


const AuthForm = ({formType}:{formType:string}) => {
  
  const router =useRouter();
  const [user,setUser]=useState(null)
  const [isLoading,setIsLoading]=useState(false)
  const formSchema = authFormSchema(formType)

  const form = useForm<z.infer<typeof formSchema>>({
  resolver:zodResolver(formSchema),
  defaultValues:{
    email:"",
    password:"",
  },
  })

  const  onSubmit= async(data:z.infer<typeof formSchema >)=>{
    setIsLoading(true)
    try {
      if(formType === "sign-up"){
          const newUser = await signUp(data);
          setUser(newUser);
      }

      if(formType === "sign-in"){
        
        const response = await signIn({
          email:data.email,
          password:data.password
        })
        console.log(response)
        if(response) router.push("/")
      }

    } catch (error) {
        console.log(error)
  }finally{
    setIsLoading(false)
  }
}
  return(
     <section className="auth-form">
          <header className="flex flex-col gap5-5 md:gap-8">
      <Link href="/" className="cursor-pointer   items-center gap-1 flex">
        <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo" />
        </Link>
          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user? "Link account":formType === "sign-in"
              ?"Sign In" : "Sign Up"}
            </h1>
            <p className="text-16 font-normal tex-gray-600">
            {user ? "Link your account to get started": "Please enter your details"}
            </p> 
          </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* Plaid link  account component */}
        </div>
      ):(
        <>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formType === "sign-up" && ( 
          <>
            <div className="flex gap-4">
              <CustomInput 
                  control={form.control} 
                  name="firstName" 
                  label="First Name" 
                  placeholder="Enter your first name" 
                  inputType="text"/>

                <CustomInput 
                  control={form.control} 
                  name="lastName" 
                  label="Last Name" 
                  placeholder="Enter your last name" 
                  inputType="text"/>
            </div>  
            <div className="">
                <CustomInput 
                  control={form.control} 
                  name="address" 
                  label="Address" 
                  placeholder="Enter your specific address" 
                  inputType="text"/>
                <CustomInput 
                  control={form.control} 
                  name="city" 
                  label="City" 
                  placeholder="Enter your city" 
                  inputType="text"/>
            </div>
            <div className="flex gap-4">
                <CustomInput 
                  control={form.control} 
                  name="state" 
                  label="State" 
                  placeholder="Example : Cornwall" 
                  inputType="text"/>
                <CustomInput 
                  control={form.control} 
                  name="postalCode" 
                  label="Postal Code" 
                  placeholder="Enter your postal code" 
                  inputType="text"/>  
            </div>
              <div className="flex gap-4">
              <CustomInput 
                  control={form.control} 
                  name="dateOfBirth" 
                  label="Date of Birth" 
                  placeholder="Enter your date of birth" 
                  inputType="date"/>  
              <CustomInput 
                  control={form.control} 
                  name="ssn" 
                  label="SSN" 
                  placeholder="Enter your ssn" 
                  inputType="text"/>  
              </div>
          </>
        )}
          <CustomInput 
                control={form.control} 
                name="email" 
                label="Email" 
                placeholder="Enter email address" 
                inputType="email"/>
            <CustomInput
                control={form.control} 
                name="password" 
                label="Password" 
                placeholder="Enter password" 
                inputType="password"/>
                
            <Button type="submit" className="form-btn">
              {isLoading ?(
                <>
                <Loader2 size={20} className="animate-spin"/> &nbsp;
                Loading
                </>
              ):formType ==="sign-in" ? "Sign In" : "Sign Up"}
            </Button>
        </form>
        </Form>
        </>
            )}
     </section> 

  )

}
export default AuthForm
