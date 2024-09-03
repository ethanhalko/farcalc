'use client';
import TextInput from './components/input';
import type React from 'react';
import {useState} from 'react';
import {units} from '@/app/si-prefix';
import {convert, parseInput} from '@/app/functions/convert';

const getConversions = (value: string): { unit: string, value: number }[] => {
  const parsed = parseInput(value);
  const normal = convert(parsed.value, parsed.unit, true);

  return units.map((unit) => {
    return {unit, value: convert(normal, unit)};
  })
};

export default function Home() {
  const [value, setValue] = useState<string>('');
  const conversions = getConversions(value);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-4">
      <h1 className={'text-5xl'}>Faralc!</h1>
      <section className={'flex flex-col my-auto w-full'}>
        <TextInput
          value={value}
          placeholder="100µF, 1µ5F, 10000pF"
          onInput={handleInput}
        />
      </section>
    </main>
  );
}
