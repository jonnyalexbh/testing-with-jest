// after each test
afterEach(() => console.log('after each test'));
afterAll(() => console.log('after all the tests'));

// before each test
beforeAll(() => console.log('before all the tests'));
beforeEach(() => console.log('before each test'));

describe('prepare before running', () => {
  test('is true', () => {
    expect(true).toBeTruthy();
  });
});
