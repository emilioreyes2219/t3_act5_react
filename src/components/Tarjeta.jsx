function Tarjeta(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>Edad: {props.edad}</p>
      <p>Carrera: {props.carrera}</p>
    </div>
  );
}

export default Tarjeta;