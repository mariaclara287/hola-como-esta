// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  WhyUs.jsx  (¿Por qué elegirnos?)
//
//  INSTRUCCIONES:
//  1. Define el array "razones" con al menos 4 objetos.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Agrega una imagen en la columna izquierda.
//  3. Escribe 2 párrafos sobre la empresa.
//  4. Usa .map() para renderizar la lista de razones.
//
//  PISTAS:
//  - <div className="row align-items-center"> para las columnas
//  - className="list-unstyled" en <ul> quita los bullets
//  - Placeholder: https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec
// ============================================================

const razones = [
  {
    icono: '🏆',
    titulo: 'Experiencia comprobada',
    descripcion: 'Trabajamos con enfoque profesional y soluciones pensadas para resultados reales.',
  },
  {
    icono: '⚡',
    titulo: 'Ejecución rápida',
    descripcion: 'Diseñamos y entregamos proyectos con agilidad, claridad y seguimiento constante.',
  },
  {
    icono: '🤝',
    titulo: 'Atención cercana',
    descripcion: 'Escuchamos tus necesidades y te acompañamos en cada paso del proceso.',
  },
  {
    icono: '📈',
    titulo: 'Resultados medibles',
    descripcion: 'Creamos experiencias digitales que fortalecen tu marca y mejoran la comunicación.',
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Columna izquierda: imagen */}
          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="Equipo de VoltTec"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Columna derecha: texto y razones */}
          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>

            <p className="text-muted mb-4">
              Somos una empresa enfocada en crear soluciones digitales modernas, claras y efectivas para negocios y proyectos que quieren destacar.
            </p>
            <p className="text-muted mb-4">
              Combinamos creatividad, tecnología y acompañamiento personalizado para que cada idea se convierta en una experiencia memorable y funcional.
            </p>

            <ul className="list-unstyled">
              {razones.map((razon, index) => (
                <li key={index} className="d-flex align-items-start gap-3 mb-3">
                  <span className="fs-4">{razon.icono}</span>
                  <div>
                    <h3 className="h5 mb-1">{razon.titulo}</h3>
                    <p className="text-muted mb-0">{razon.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;