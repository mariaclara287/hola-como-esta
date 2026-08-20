import { useState, useEffect } from 'react';
import './App.css';

// Datos iniciales de tareas.
const tareasIniciales = [
  { id: 1, texto: 'Aprender React', categoria: 'estudio', completada: false },
  { id: 2, texto: 'Hacer ejercicio', categoria: 'salud', completada: true },
  { id: 3, texto: 'Leer un libro', categoria: 'ocio', completada: false },
  // FIX BUG 1: Se agrega la propiedad 'categoria' por defecto para evitar undefined
  { id: 4, texto: 'Practicar debugging', categoria: 'general', completada: false },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState('todas');
  const [contador, setContador] = useState(0);

  // FIX BUG 2: Se agrega el arreglo de dependencias vacio []
  // Ahora el efecto solo se ejecuta una vez al montar el componente, evitando el bucle infinito.
  useEffect(() => {
    console.log('Renderizando App, contador:', contador);
    setContador((prev) => prev + 1);
  }, []);

  // Filtra las tareas según el botón elegido
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'todas') return true;
    // FIX BUG 3: Se compara contra booleanos (true/false) en lugar de cadenas de texto ("true"/"false")
    if (filtro === 'completadas') return tarea.completada === true;
    if (filtro === 'pendientes') return tarea.completada === false;
    return true;
  });

  // Agrega una tarea nueva a la lista
  function agregarTarea(texto) {
    if (!texto.trim()) return;
    
    // FIX BUG 4: Se genera un nuevo arreglo usando el operador spread (...) en lugar de mutar con push()
    // De esta forma React detecta el cambio de referencia y actualiza la pantalla.
    const nuevaTarea = { id: Date.now(), texto, categoria: 'general', completada: false };
    setTareas([...tareas, nuevaTarea]);
  }

  // Marca una tarea como completada
  function completarTarea(id) {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: true } : tarea
    );
    setTareas(nuevasTareas);
  }

  return (
    <div className="app">
      <h1>Mis Tareas</h1>

      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>

      <ul className="lista-tareas">
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <span>{tarea.texto}</span>
            {/* FIX BUG 1: Se usa Optional Chaining (?.) o valor por defecto como respaldo adicional */}
            <span className="categoria">{(tarea.categoria || 'general').toUpperCase()}</span>
            <button onClick={() => completarTarea(tarea.id)}>✔</button>
          </li>
        ))}
      </ul>

      <AgregarTarea onAgregar={agregarTarea} />
      <PerfilUsuario />
    </div>
  );
}

function AgregarTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    onAgregar(texto);
    setTexto('');
  }

  return (
    <form onSubmit={manejarEnvio} className="form-agregar">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);
  // FIX BUG 5: Se añade un estado de error para capturar fallos de carga
  const [errorPerfil, setErrorPerfil] = useState(null);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  // Simula una llamada a una API
  function obtenerUsuario() {
    const exito = Math.random() > 0.5;

    setTimeout(() => {
      // FIX BUG 5: Uso de bloque try/catch para capturar el error sin dejar la pantalla pegada
      try {
        if (exito) {
          setUsuario({ nombre: 'Estudiante React' });
        } else {
          throw new Error('No se pudo cargar el usuario');
        }
      } catch (error) {
        console.error('Error capturado:', error.message);
        setErrorPerfil(error.message);
      }
    }, 1000);
  }

  // FIX BUG 5: Manejo visual de error en lugar de quedarse en "Cargando perfil..."
  if (errorPerfil) return <p className="perfil error">Error: {errorPerfil}</p>;
  if (!usuario) return <p className="perfil">Cargando perfil...</p>;

  return <p className="perfil">Perfil: {usuario.nombre}</p>;
}

export default App;