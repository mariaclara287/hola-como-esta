import { useState } from 'react'
import './App.css'

const initialState = {
  nombre: '',
  email: '',
  password: '',
  telefono: '',
  edad: '',
  fechaNacimiento: '',
  codigo: '',
  carrera: '',
  turno: 'mañana',
  genero: '',
  colorPreferido: '#4f46e5',
  intereses: [],
  archivo: '',
  observaciones: '',
  aceptoTerminos: false,
}

function App() {
  const [formData, setFormData] = useState(initialState)
  const [mensaje, setMensaje] = useState('')

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target

    if (type === 'checkbox') {
      if (name === 'intereses') {
        const intereses = formData.intereses.includes(value)
          ? formData.intereses.filter((item) => item !== value)
          : [...formData.intereses, value]

        setFormData((prev) => ({ ...prev, intereses }))
        return
      }

      setFormData((prev) => ({ ...prev, [name]: checked }))
      return
    }

    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        archivo: event.target.files?.[0]?.name ?? '',
      }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMensaje(`Registro enviado para ${formData.nombre || 'el estudiante'}`)
  }

  const handleReset = () => {
    setFormData(initialState)
    setMensaje('')
  }

  return (
    <main className="registro-container">
      <section className="registro-card">
        <div className="registro-header">
          <p className="eyebrow">Plataforma educativa</p>
          <h1>Registro de estudiante</h1>
          <p>Completa los datos para inscribir al estudiante en el sistema.</p>
        </div>

        <form className="registro-form" onSubmit={handleSubmit}>
          <div className="grid">
            <label>
              <span>Nombre completo</span>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </label>

            <label>
              <span>Correo electrónico</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
              <span>Contraseña</span>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>

            <label>
              <span>Teléfono</span>
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </label>

            <label>
              <span>Edad</span>
              <input type="number" name="edad" min="10" max="60" value={formData.edad} onChange={handleChange} required />
            </label>

            <label>
              <span>Fecha de nacimiento</span>
              <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
            </label>

            <label>
              <span>Código de estudiante</span>
              <input type="text" name="codigo" value={formData.codigo} onChange={handleChange} required />
            </label>

            <label>
              <span>Carrera</span>
              <select name="carrera" value={formData.carrera} onChange={handleChange} required>
                <option value="">Selecciona una carrera</option>
                <option value="Ingeniería de Software">Ingeniería de Software</option>
                <option value="Diseño Gráfico">Diseño Gráfico</option>
                <option value="Administración">Administración</option>
                <option value="Contaduría">Contaduría</option>
              </select>
            </label>
          </div>

          <fieldset>
            <legend>Género</legend>
            <label className="option-row">
              <input type="radio" name="genero" value="Masculino" checked={formData.genero === 'Masculino'} onChange={handleChange} />
              Masculino
            </label>
            <label className="option-row">
              <input type="radio" name="genero" value="Femenino" checked={formData.genero === 'Femenino'} onChange={handleChange} />
              Femenino
            </label>
            <label className="option-row">
              <input type="radio" name="genero" value="Otro" checked={formData.genero === 'Otro'} onChange={handleChange} />
              Otro
            </label>
          </fieldset>

          <fieldset>
            <legend>Turno</legend>
            <label className="option-row">
              <input type="radio" name="turno" value="mañana" checked={formData.turno === 'mañana'} onChange={handleChange} />
              Mañana
            </label>
            <label className="option-row">
              <input type="radio" name="turno" value="tarde" checked={formData.turno === 'tarde'} onChange={handleChange} />
              Tarde
            </label>
            <label className="option-row">
              <input type="radio" name="turno" value="noche" checked={formData.turno === 'noche'} onChange={handleChange} />
              Noche
            </label>
          </fieldset>

          <fieldset>
            <legend>Áreas de interés</legend>
            <label className="option-row">
              <input type="checkbox" name="intereses" value="Programación" checked={formData.intereses.includes('Programación')} onChange={handleChange} />
              Programación
            </label>
            <label className="option-row">
              <input type="checkbox" name="intereses" value="Diseño" checked={formData.intereses.includes('Diseño')} onChange={handleChange} />
              Diseño
            </label>
            <label className="option-row">
              <input type="checkbox" name="intereses" value="Emprendimiento" checked={formData.intereses.includes('Emprendimiento')} onChange={handleChange} />
              Emprendimiento
            </label>
          </fieldset>

          <label>
            <span>Color preferido</span>
            <input type="color" name="colorPreferido" value={formData.colorPreferido} onChange={handleChange} />
          </label>

          <label>
            <span>Foto o documento</span>
            <input type="file" name="archivo" onChange={handleChange} />
          </label>

          <label>
            <span>Observaciones</span>
            <textarea name="observaciones" rows="4" value={formData.observaciones} onChange={handleChange} />
          </label>

          <label className="checkbox-row">
            <input type="checkbox" name="aceptoTerminos" checked={formData.aceptoTerminos} onChange={handleChange} />
            Acepto los términos y condiciones del registro.
          </label>

          <div className="actions">
            <button type="submit">Registrar estudiante</button>
            <button type="button" className="secondary" onClick={handleReset}>Limpiar</button>
          </div>
        </form>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </section>
    </main>
  )
}

export default App
