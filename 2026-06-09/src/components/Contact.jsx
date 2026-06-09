import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Diseño web',
    mensaje: '',
  });
  const [mensajeEnvio, setMensajeEnvio] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMensajeEnvio(
      `Gracias ${formData.nombre || 'cliente'}, hemos recibido tu solicitud de ${formData.servicio.toLowerCase()} y te responderemos pronto.`
    );
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            Cuéntanos tu proyecto y te ayudamos a convertir tu idea en una experiencia digital memorable.
          </p>
        </div>

        <div className="row g-5">

          {/* Columna izquierda: información de contacto */}
          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>
            <ul className="list-unstyled text-light">
              <li className="mb-3"><strong>📍 Dirección:</strong> Calle Principal 123, Bogotá</li>
              <li className="mb-3"><strong>📞 Teléfono:</strong> +57 300 123 4567</li>
              <li className="mb-3"><strong>📧 Email:</strong> contacto@empresa.com</li>
              <li className="mb-3"><strong>🕐 Horario:</strong> Lunes a Viernes, 8:00 a.m. - 6:00 p.m.</li>
            </ul>
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="form-control"
                    placeholder="300 123 4567"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="servicio" className="form-label">Tipo de servicio</label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="form-select"
                    value={formData.servicio}
                    onChange={handleChange}
                  >
                    <option value="Diseño web">Diseño web</option>
                    <option value="Desarrollo frontend">Desarrollo frontend</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Marketing digital">Marketing digital</option>
                    <option value="Soporte y mantenimiento">Soporte y mantenimiento</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-control"
                    rows="4"
                    placeholder="Describe tu proyecto o necesidad..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-dark w-100">Enviar mensaje</button>
                </div>

                {mensajeEnvio && (
                  <div className="col-12">
                    <div className="alert alert-success mb-0" role="alert">
                      {mensajeEnvio}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;