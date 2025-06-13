import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Logo from "./assets/pokemonLogo.png";
import Search from "./pages/Search";
import { Favorite } from "./pages/Favorite";

function App() {
  return (
    <div className="w-full mt-15">
      <nav className="fixed top-0 left-0 w-full flex justify-center items-center bg-white shadow-md py-3.5">
        <Link to="/">
          <img className="w-40 auto" src={Logo}></img>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
