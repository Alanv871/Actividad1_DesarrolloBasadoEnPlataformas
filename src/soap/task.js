const taskService = require('../services/taskService');
const logger = require('../utils/logger');

module.exports = {
    TaskService:{
        TaskServicePort: {
            getTasks(args, callback){
                const tasks = taskService.getTasks();
                logger.info("lista de tareas enviada en soap");
                callback({tasks: tasks});
            },
            AddTask(args, callback){
                const task = taskService.createTask(args.title);
                logger.info("Tarea creada en soap");
                callback({task});
            }
        }
    }
}