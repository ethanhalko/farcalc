import { expect, it } from 'vitest';
import {convert, parseInput} from '../src/app/functions/convert';

it('converts to base unit', () => {
	let result: number;

	result = convert(1, 'k', true);
	expect(result).equal(1000);

	result = convert(1000000, 'u', true);
	expect(result).equal(1);

	result = convert(10000, 'p', true);
	expect(result).equal(0.00000001);
});

it('converts from base unit', () => {
	let result: number;

	result = convert(1000, 'k');
	expect(result).equal(1);

	result = convert(1, 'u');
	expect(result).equal(1000000);

	result = convert(0.00000001, 'p');
	expect(result).equal(10000);

	result = convert(0.0000000123, 'p');
	expect(result).equal(12300);
	//
	// result = convert(1.223, 'u');
	// expect(result).equal(1223000);
});

it('parses user input', () => {
	let result: {unit: string, value: number};

  result = parseInput('100p4');
	expect(result.unit).equal('p');
	expect(result.value).equal(100.4);

	result = parseInput('100.4pF');
	expect(result.unit).equal('p');
	expect(result.value).equal(100.4);

	result = parseInput('100F');
	expect(result.unit).length(0);
	expect(result.value).equal(100);

	result = parseInput('1000g');
	expect(result.unit).equal('g'); // we still want to capture the entered unit even if it is invalid
	expect(result.value).equal(1000);
});
