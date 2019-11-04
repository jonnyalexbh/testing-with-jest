import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('mathematical calculations', () => {
  test('sums test', () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test('multiplication test ', () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
});
