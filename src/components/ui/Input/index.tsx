import React from 'react'
import { UseFormRegister } from 'react-hook-form'

type Props = {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  className?: string
  autoComplete?: React.HTMLInputAutoCompleteAttribute
  errorMessage?: string
  name: string
  register: UseFormRegister<any>
}

const Input = ({ type, placeholder, className, autoComplete, errorMessage, name, register }: Props) => {
  return (
    <div className={className}>
      <input
        type={type}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}

export default Input
