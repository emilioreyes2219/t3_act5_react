function ListaTareas() {
  const tareas = [
    "Estudiar React",
    "Hacer la actividad",
    "Subir el proyecto a GitHub",
    "Publicar en GitHub Pages"
  ];

  return (
    <div>
      <h2>Lista de Tareas</h2>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;