import express from 'express';
import {
  paginaContacto, paginaDetalleViaje, paginaInicio,
  paginaNosotros, paginaTestimoniales, paginaViajes
} from '../controllers/paginasController.js';
import { guardarTestimoniales } from '../controllers/testimonialController.js';

const router = express.Router();

// router.get
// router.post
// router.put
// router.delete
// router.patch

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimoniales);

router.get('/contacto', paginaContacto);

export default router;