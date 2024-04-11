import { useState } from "react";

function EditName() {
  const [editingName, setEditingName] = useState(false);

  return (
    <>
      {editingName ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => setEditingName(false)}>Save</button>
        </div>
      ) : (
        <div>
          <div>{name}</div>
          <button onClick={() => setEditingName(true)}>Edit</button>
        </div>
      )}
    </>
  );
}
export default EditName;
