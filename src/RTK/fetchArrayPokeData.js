import { fetchPokeData } from './fetchAPI';

export const fetchArrayPokeData = async () => {
    const ids = Array.from({length: 151}, (_, i) => i+1);
    const promises = ids.map(id => fetchPokeData(id));
    const pokeArray = await Promise.all(promises);

    return pokeArray;
}