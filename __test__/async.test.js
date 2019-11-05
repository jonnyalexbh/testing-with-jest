import { getDataFromApi } from '../promise';

describe('try Async / Await', () => {
  test('make a request to an api', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const getRick = 'https://rickandmortyapi.com/api/character/1'
    await getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
    });
    await getDataFromApi(getRick).then(data => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });
});
