// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan

import { useState } from "react";

let count = 1;

function App() {
  const [films, setFilms] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    const film = {
      id: count++,
      text: input,
    };

    const filmsCopy = [...films];
    filmsCopy.push(film);
    setFilms(filmsCopy);
  }

  function handleRemove(id) {
    const filteredList = films.filter((film) => film.id != id);
    setFilms(filteredList);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Lägg till</button>

      <h2>Mina Filmer</h2>
      {films.map((film) => {
        return (
          <div key={film.id}>
            <div>{film.text}</div>
            <button onClick={() => handleRemove(film.id)}>Ta bort</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
