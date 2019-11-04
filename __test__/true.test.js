import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('test null results', () => {
  it('null', () => {
    expect(isNull()).toBeNull();
  });
});
describe('test true results', () => {
  it('true', () => {
    expect(isTrue()).toBeTruthy();
  });
});
describe('test false results', () => {
  test('false', () => {
    expect(isFalse()).toBeFalsy();
  });
});
describe('test results undefined', () => {
  test('undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});
describe('test non-true results', () => {
  it('false or true', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
