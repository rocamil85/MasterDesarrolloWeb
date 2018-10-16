'use strict'

var Project = require('../Models/Project');
var fs = require('fs');

var controller = {

    home: function (req, res) {
        return res.status(200).send({
            message: "Soy la Home"

        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: "Soy la accion del controlador de Project"

        });
    },

    //Create en BD
    saveProject: function (req, res) {
        var body = req.body;

        var project = new Project();
        project.name = body.name;
        project.description = body.description;
        project.category = body.category;
        project.year = body.year;
        project.langs = body.langs;
        project.image = body.image;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: "Error al guardar el documento" });

            if (!projectStored) return res.status(404).send({ message: "Nose ha podido guardar el documento" });

            return res.status(200).send({ message: projectStored });
        });
    },

    //Read en BD lista todos los elementos de una coleccion//ver doc de mongoose que se puede hacer un where,sort.Ver definicion del metodo find que se puede hacer una condicion.
    getProjects: function (req, res) {

        Project.find((err, documents) => {
            if (err) return res.status(500).send({ message: err.message });

            if (!documents) return res.status(404).send({ message: "No se ha encontrado los documentos" });

            return res.status(200).send({ documents });
        });
    },

    //Read en BD objeto especifico
    getProject: function (req, res) {
        var id = req.params.id;
        if (id == null) {
            return res.status(404).send({ message: "debe pasar el identificador del documento" });
            //return res.send({message:"debe pasar el identificador del documento"});  tambienn se puede hacer
        }

        Project.findById(id, (err, doc) => {
            if (err) return res.status(500).send({ message: err.message });

            if (!doc) return res.status(404).send({ message: "No se ha encontrado el documento" });

            return res.status(200).send({ doc });
        });
    },

    //Update en BD 
    updateProject: function (req, res) {
        var id = req.params.id;
        var obj = req.body;

        Project.findByIdAndUpdate(id, obj, { new: true }, (err, objUpdated) => {
            if (err) return res.status(500).send({ message: err.message });

            if (!objUpdated) return res.status(404).send({ message: "No se ha encontrado el documento a modificar" });

            return res.status(200).send({ objUpdated });
        });
    },

    //Delete en BD 
    deleteProject: function (req, res) {
        var id = req.params.id;
        Project.findByIdAndDelete(id, (err, objDeleted) => {
            if (err) return res.status(500).send({ message: err.message });

            if (!objDeleted) return res.status(404).send({ message: "No se ha encontrado el documento a eliminar" });

            return res.status(200).send({ objDeleted });
        });
    },

    //upload image 
    uploadImage: function (req, res) {
        var id = req.params.id;

        var fileName = "Imagen no subida...";
        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];

            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Project.findByIdAndUpdate(id, { image: fileName }, { new: true }, (err, objUpdated) => {
                    if (err) return res.status(500).send({ message: err.message });

                    if (!objUpdated) return res.status(404).send({ message: "No se ha encontrado el documento a modificar" });

                    return res.status(200).send({ objUpdated });
                });
            }
            else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({ message: "la extension no es valida" });
                });
            }
        }
        else {
            return res.status(200).send({ fileName });
        }
    },



//----
};

module.exports = controller;