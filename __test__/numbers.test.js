import { numbers } from '../numbers';

describe('number comparison', () => {
  it('be greater than', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  it('be greater than or equal', () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  it('be less than', () => {
    expect(numbers(2, 2)).toBeLessThan(5);
  });
  it('be less than or equal', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(7);
  });
  it('floating numbers', () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
  });
});
