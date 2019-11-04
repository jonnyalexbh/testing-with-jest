describe('common comparators', () => {
  const user = {
    name: 'tankis',
    lastname: 'lopez'
  };

  const user2 = {
    name: 'Daniel',
    lastname: 'Carmona'
  };

  const user3 = {
    name: 'tankis',
    lastname: 'lopez'
  };


  test('equality of elements', () => {
    expect(user).toEqual(user3);
  });
  test('They are not exactly the same', () => {
    expect(user).not.toEqual(user2);
  });
});
