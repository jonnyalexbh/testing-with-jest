import * as math from '../maths';

describe('mathematical calculations jest fn', () => {
  it('sums test', () => {
    const spy = jest.spyOn(math, 'sumar');
    const resultSum = math.sumar(2, 1);
    expect(resultSum).toBe(3);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(2, 1);
    expect(spy).toHaveBeenCalledTimes(1);
  })
})
