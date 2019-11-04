import { arrayFruits, arrayColors } from '../arrays';

describe('we will check that there is an element', () => {
  test('Do you have a banana?', () => {
    expect(arrayFruits()).toContain('banana');
  });
  test('Does not contain a platano', () => {
    expect(arrayFruits()).not.toContain('platano');
  });
  test('Check the size of an array', () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test('We will check that there is a color', () => {
    expect(arrayColors()).toContain('azul');
  });
});
