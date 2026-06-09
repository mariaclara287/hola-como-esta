// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Services.jsx
//
//  INSTRUCCIONES:
//  1. Define el array "servicios" con al menos 6 servicios.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Completa el JSX usando tarjetas Bootstrap (card).
//  3. Usa .map() para renderizar — NO copies el HTML 6 veces.
//
//  PISTAS:
//  - Usa <div className="row g-4"> para el grid
//  - Cada tarjeta va en <div className="col-md-6 col-lg-4">
//  - Clases Bootstrap útiles: card, card-body, card-title, card-text
// ============================================================

const servicios = [
  {
    icono: '🌐',
    titulo: 'Diseño web moderno',
    descripcion: 'Creamos sitios atractivos, rápidos y adaptados a tus objetivos de negocio.',
  },
  {
    icono: '⚡',
    titulo: 'Desarrollo frontend',
    descripcion: 'Implementamos interfaces fluidas con React, HTML y CSS para una experiencia clara.',
  },
  {
    icono: '🛒',
    titulo: 'Tiendas online',
    descripcion: 'Diseñamos e-commerce intuitivos para vender mejor y aumentar conversiones.',
  },
  {
    icono: '📱',
    titulo: 'Optimización móvil',
    descripcion: 'Aseguramos que tu proyecto se vea y funcione perfecto en cualquier pantalla.',
  },
  {
    icono: '📈',
    titulo: 'Marketing digital',
    descripcion: 'Te ayudamos a posicionar tu marca y atraer clientes con estrategias digitales.',
  },
  {
    icono: '🛠️',
    titulo: 'Soporte y mantenimiento',
    descripcion: 'Mantenemos tu plataforma actualizada, segura y lista para crecer.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            Soluciones creativas y funcionales para impulsar tu presencia digital con calidad y resultados.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <article className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="display-6 mb-3">{servicio.icono}</div>
                  <h3 className="card-title h5 fw-bold">{servicio.titulo}</h3>
                  <p className="card-text text-muted mb-0">{servicio.descripcion}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;