import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");

  let nombre = "Juan";
  let apellido = "Perez";

  const handleChange = (e) => {
    if (e.target.name === "nombre") {
      setName(e.target.value);
    } else {
      setLastname(e.target.value);
    }
    console.log(`EL nomnre completo es :${name} ${apellido}`);
  }
  return (
    <div>
      <label>Nombre</label>
      <input
        type="text"
        defaultValue={name}
        name="nombre"
        id="nombre"
        onChange={handleChange}
      />
      <hr />
      <label>Apellido</label>
      <input
        type="text"
        defaultValue={lastName}
        name="apellido"
        id="apellido"
        onChange={handleChange}
      />

      <p>{ nombre } { apellido }</p>
      <p>{ name } { lastName }</p>
    </div>
  );
};
