import { Link, Route, Routes } from "react-router-dom";
import Logo from "./assets/pokemonLogo.png";
import { lazy, Suspense } from "react";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  return (
    <div className="w-full mt-15">
      <nav className="fixed top-0 left-0 w-full flex justify-center items-center bg-white shadow-md py-3.5">
        <Link to="/">
          <img className="w-40 auto" src={Logo}></img>
        </Link>
      </nav>
      <Suspense fallback={<div>Loding...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
