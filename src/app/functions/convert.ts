import { prefix, units } from '../si-prefix';
/**
 * @param val
 * @param factor
 * @param normalize - are we converting TO or FROM the "normal" or "base" unit?
 *
 * Converts value to standard base-unit Farad and back again
 */
export function convert(val: number, factor: string, normalize = false) {
	const exp = normalize ? prefix.get(factor) * -1 : prefix.get(factor);

	return val / 10 ** exp;
}

export function parseInput(input) {
	const BASE_UNIT = 'F';
	let value = input;

	if (input.slice(-1) === BASE_UNIT) {
		value = input.slice(0, -1);
	}

	try {
		const inlineDecimal = value.match(/\d*([a-zA-Z])\d*F?/);
		if (inlineDecimal) {
			const unit = inlineDecimal?.[1];

			return { unit, value: Number.parseFloat(value.replace(unit, '.')) };
		}

		let unit = value.slice(-1);
		unit = Number.isNaN(unit) ? unit : null;

		return { unit, value: Number.parseFloat(value.replace(unit, '')) };
	} catch (e) {
		console.error(e);
	}
}

export function validate(value) {
	try {
		const parsed = parseInput(value);
	} catch {
		return new Error('Invalid input - please use proper syntax');
	}

	// return { unit: , value: 0 };
}
