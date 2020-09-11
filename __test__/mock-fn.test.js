import * as math from '../maths';

math.sumar = jest.fn().mockReturnValue(3);
math.multiplicar = jest.fn();

describe('mathematical calculations jest fn', () => {
  it('sums test', () => {
    expect(math.sumar(2, 1)).toBe(3);
    expect(math.sumar).toHaveBeenCalled();
    expect(math.sumar).toHaveBeenCalledWith(2, 1);
    expect(math.sumar).toHaveBeenCalledTimes(1);
  })

  it('multiplication test', () => {
    math.multiplicar.mockReturnValue(8)
    expect(math.multiplicar(4, 2)).toBe(8);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledWith(4, 2);
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
  })
})

