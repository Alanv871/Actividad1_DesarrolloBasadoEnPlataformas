const express = require('express');
const taskService = require('../services/taskService');//LLega a la carpeta donde está taskService
const logger = require('../utils/logger');

const router = express.Router();//Usa el framework de express


//POST
router.post('/', (request, response)=>{
    let title = request.body.title;
    let task = taskService.createTask(title);
    logger.info(`Tarea con el id = ${task.id} se ha modificado.` );
    response.status(201).json(task);
});

//GET
router.get('/', (request, response)=>{
    response.json(taskService.getTasks());
});//El metodo get tradicionalmente tiene paso de parametros por el id

//GET
router.get('/:id', (request, response)=>{
    const id = request.params.id;
    response.json(taskService.getTaskById(id));
});//Nunca se deben repetir la url o el metodo get http

//PUT
router.put('/:id', (request, response)=>{
    const id = request.params.id;
    let taskToUpdate = taskService.updateTask(id, request.body);
    logger.info(`Tarea con el id = ${taskToUpdate.id} se ha modificado.`);
    response.json(taskToUpdate);
})


//DELETE
router.delete('/:id', (request, response)=>{
    const id = request.params.id
    let taskToDelete = taskService.deleteTask(id);
     logger.info(`Tarea con el id = ${id} se ha eliminado.`);
    response.json(taskToDelete);
})



module.exports = router;