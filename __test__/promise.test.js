import { getDataFromApi } from '../promise';

describe('testing promises', () => {
  test('Realizando una peticion a una api', done => {
    const api = 'https://rickandmortyapi.com/api/character/';
    getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
});
