export function BotonEstado({ texto, activo }) {
  const color = activo ? "pink" : "pink";
  return (
    <button style={{ backgroundColor: color, color: 'purple', padding: '10px' }}>
      {texto}
    </button>
  );
}