import {prefix, validUnits} from '@/app/si-prefix';

export const analyzeInput = (): { value: number, unit: string } => {

  return {
    value: 0,
    unit: 'u'
  }
}

/**
 * @param val
 * @param factor
 *
 * Converts value to standard base-unit Farad for easier conversion
 */
function normalizeDenormalize(val: number, factor: string) {
  return val * 10 ^ (prefix[factor] * -1);
}

export default function convert(val: number, from: string, to: string) {
  const normal = normalizeDenormalize(val, from);

  return normalizeDenormalize(normal, to);
}

export const validate = (value) => {

}
