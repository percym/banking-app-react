'use client'

import React from 'react'
import {
    FormControl,
    FormLabel,
    FormMessage,
    FormField
  } from "@/components/ui/form"
  import { Control, FieldPath } from 'react-hook-form'
  import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils'
import { z } from 'zod'

  interface CustomInput{
    control :Control<z.infer<typeof authFormSchema>>,
    name :FieldPath<z.infer<typeof authFormSchema>>,
    label:string,
    placeholder:string,
    type:string,
  }
  const CustomInput = ({control, name ,label, placeholder,type}:CustomInput) => {
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className='form-item'>
             <FormLabel className='form-label'>
              {label}
              </FormLabel>
              <div className="flex w-full flex-col">
              <FormControl>
                <Input  
                  placeholder={placeholder}
                  className='input-class'
                  type={type}
                  {...field}/>
              </FormControl>
              <FormMessage className='form-message'/>
              </div> 
          </div>
        )}
      />
    )
  }
  
  export default CustomInput
  