import * as math from '../maths';

math.sumar = jest.fn().mockReturnValue(3);

describe('mathematical calculations jest fn', () => {
  it('sums test', () => {
    expect(math.sumar(2, 1)).toBe(3);
    expect(math.sumar).toHaveBeenCalled();
    expect(math.sumar).toHaveBeenCalledWith(2, 1);
    expect(math.sumar).toHaveBeenCalledTimes(1);
  })
})
