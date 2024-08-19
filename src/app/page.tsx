'use client'
import TextInput from './components/input';
import React, {useState} from 'react';

const getConversions = (value): string[] => {

  return [];
}

export default function Home() {
  const [value, setValue] = useState<string>('');
  const conversions = getConversions(value);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };


  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-4">
      <h1 className={'text-5xl'}>
        Faralc!
      </h1>
      <section className={'flex flex-col my-auto w-full'}>
        <TextInput value={value} placeholder="100µF, 1µ5F, 10000pF" onInput={handleInput}/>
        {conversions}
      </section>
    </main>
  );
}
