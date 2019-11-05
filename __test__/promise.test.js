import { getDataFromApi } from '../promise';

describe('testing promises', () => {
  test('making a request to an api', done => {
    const api = 'https://rickandmortyapi.com/api/character/';
    getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
  test('solve a Hello!', () => {
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
  });
  test('reject with an error', () => {
    return expect(Promise.reject('Errror')).rejects.toBe('Errror');
  });
});
