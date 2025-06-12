import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../RTK/pokemonSlice";

function Main() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>포켓몬 리스트</h1>
      <ul>
        {list.map((poke) => (
          <li key={poke.id}>
            {poke.koreaName} <img src={poke.imageFront} alt={poke.name}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
