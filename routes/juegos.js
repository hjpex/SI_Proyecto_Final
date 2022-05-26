var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var Juego = require('../modelos/juegos');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  Juego.find({}, (err, datos)=>{
    if(err){
      res.json({'Error':'No existe'})
    }else{
      res.status(200).json(datos);
    }
  });
});

router.post('/', (req, res, next)=>{
  var game = Juego({        
    id:req.body.id,
    nombre: req.body.nombre,
    anio: req.body.anio,
    compania: req.body.compania,
    consola: req.body.consola
  });
  game.save((err,data)=>{
    if(err){
      res.json({'error':"Error al insertar"});
    }else{
      res.status(200).json(data);
    }
  });
});

router.delete('/:idGam', function(req, res, next) {
  Juego.deleteOne({'id':req.params.idGam}, (err)=>{
    if(err){
      res.json({'Error':'No existe'})
    }else{
      res.json({'Estatus':'Borrado'})
    }
  });
});

module.exports = router;
