import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viaje.js';

const paginaInicio = async (req, res) => {
  // req - lo que enviamos : res - lo que express nos responde.
  // res.send('Hola Mundo');
  // res.json({ id: 1 });
  // res.render();

  // Consultar 3 viajes del modelo Viaje
  const promiseDB = [];

  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    const resultado = Promise.all(promiseDB);
    res.render('Inicio', {
      pagina: 'Inicio',
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1]
    });
  } catch (error) {
    console.log('error :', error);
  }
}

const paginaNosotros = (req, res) => { 
  // req - lo que enviamos : res - lo que express nos responde.
  const viajes = 'Cambiando el texto';
  res.render('nosotros', {
    pagina: 'Nosotros'
  });
}

const paginaViajes = (req, res) => {
  // Consultar BD
  const viajes = Viaje.findAll();
  console.log('viajes:', viajes);

  res.render('viajes', {
    pagina: 'Próximos viajes',
    viajes,
  });
}

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales
    }); 
  } catch (error) {
    console.log('error :', error);
  }
}

const paginaContacto = (req, res) => {
  // req - lo que enviamos : res - lo que express nos responde.
  res.send('Contacto');
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;
  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render('viaje', {
      pagina: 'Información viaje',
      viaje
    })
  } catch (error) {
    console.log(error);
  }
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaContacto,
  paginaDetalleViaje,
};
