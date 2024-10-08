import type React from 'react';

interface ITextInputProps {
  value?: string
  placeholder: string
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput({placeholder, onInput}: ITextInputProps) {
  return (
    <input type={'text'}
           onInput={onInput}
           className={'py-2 px-4 lg:w-1/4 mx-auto focus:outline-none focus:border-gray-400 border-b-2 w-full lg:focus:w-3/4 transition-input ease-in-out text-center'}
           placeholder={placeholder}
    />
  );
}
