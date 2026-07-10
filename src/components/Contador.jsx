import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>

      <button onClick={() => setContador(contador - 1)}>
        Disminuir
      </button>
    </div>
  );
}

export default Contador;