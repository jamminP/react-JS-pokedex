export const fetchPokeData = async (id) =>{

    // 기본 정보 가져오기.
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!res.ok)
        throw new Error('Failed to fetch pokemon data');

    const data = await res.json();


    // 설명 가져오기.
    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    if(!speciesRes.ok)
        throw new Error('Failed to fetch pokemon species');

    const speciesData = await speciesRes.json();

    const koreanNameEntry = speciesData.names.find(
        (data) => data.language.name === 'ko'
    );

    const flavorEntry = speciesData.flavor_text_entries
    .filter((data) => data.language.name === 'ko')
    .map(data => data.flavor_text);

    console.log(flavorEntry);

    return {
        id,
        name: data.name,
        koreaName: koreanNameEntry ? koreanNameEntry.name : data.name,
        imageFront: data.sprites.front_default,
        imageBack: data.species.back_default,
        description: flavorEntry
    }
}