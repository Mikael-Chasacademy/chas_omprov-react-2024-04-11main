// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.

import React from "react";
import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return { value, handleChange };
};

function App() {
  const input = useInput("");
  const [list, setList] = useState([]);

  const handleAddToList = () => {
    setList([...list, input.value]);
    input.setValue("");
  };

  return (
    <div>
      <input type="text" value={input.value} onChange={input.handleChange} />
      <button onClick={handleAddToList}>Lägg till</button>

      <h1>Min lista:</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
