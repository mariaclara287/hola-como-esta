El mensaje de error o comportamiento raro observado.
R\\ Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase'). La pantalla se ponía completamente roja o en blanco.

-se imprimía muchas veces y el número no paraba de subir.

-Al hacer clic en los botones , la lista quedaba totalmente vacía.

-Escribía una tarea, le daba a Agregar y la pantalla seguia igual.

A veces la app se quedaba atascada en Cargando perfil  aparecía un error en rojo.

QUE CONSOLE UTILIZARON 
R\\console.log(tarea); dentro del .map()

-console.log('Renderizando App, contador:', contador);

-console.log(typeof tarea.completada, tarea.completada);

-console.log('Cantidad antes:', tareas.length);

-console.error('Error al obtener usuario:', error.message);

CODIGO CORREGIDO 
R\\ <span className="categoria">{(tarea.categoria || 'general').toUpperCase()}</span>

-useEffect(() => {
  console.log('Renderizando App, contador:', contador);
  setContador((prev) => prev + 1);
}, []);

-if (filtro === 'completadas') return tarea.completada === true;
if (filtro === 'pendientes') return tarea.completada === false;

-setTareas([...tareas, nuevaTarea]);

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


