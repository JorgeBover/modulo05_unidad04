var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var serviciosModel = require('../../models/serviciosModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var servicios = await serviciosModel.getServicios();
  res.render('admin/servicios',{
    layout: 'admin/layout',
    usuario: req.session.nombre,
    servicios
  });
});

router.get('/agregar', (req, rest, next) => {
    res.render('admin/agregar', {
      layout: 'admin/layout'
  })
});

module.exports = router;