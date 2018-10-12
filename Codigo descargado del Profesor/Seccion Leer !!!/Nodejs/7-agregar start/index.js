'use strict'
 var mongoose = require('mongoose');
 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost:27017/portafolio')
					.then(() =>{
						console.log("Conexion a bd establecida");
					})
					.catch(err => console.log(err));