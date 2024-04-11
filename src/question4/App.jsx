// 3. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.
// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.

import { useState } from "react";
import { EditName } from "./ChangeName";

const person = {
  name: "Micke",
};

function App() {
  const [name, setName] = useState(person.name);

  return (
    <>
      <div>
        <EditName />
      </div>
    </>
  );
}

export default App;
