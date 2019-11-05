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

  test('making a request to an api with error', async () => {
    const apiError = 'http://httpstat.us/500';
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'));
  });

  test('solve a hello', async () => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });

}); 
