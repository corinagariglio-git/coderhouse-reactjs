import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Bienvenida a LilaFit, entrená motivada" />
          }
        />

        <Route
          path="/categoria/:categoryId"
          element={<ItemListContainer greeting="Catálogo de productos" />}
        />

        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        <Route
          path="*"
          element={
            <main className="item-list-container">
              <h1>Página no encontrada</h1>
              <p>Revisá la dirección o volvé al inicio.</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
