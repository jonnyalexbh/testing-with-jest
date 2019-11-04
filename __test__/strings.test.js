describe('check text strings', () => {
  const text = 'un bonito texto';
  test('must contain the following text', () => {
    expect(text).toMatch(/bonito/);
  });
  test('it does not contain the following text', () => {
    expect(text).not.toMatch(/es/);
  });
  test('check the size of a text', () => {
    expect(text).toHaveLength(15);
  });
});
