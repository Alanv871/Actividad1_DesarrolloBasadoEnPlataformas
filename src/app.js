//http://localhost:3000/api/tasks/1

const express = require ('express');
const taskRouter = require('./routes/tasks');
const logger = require('./utils/logger');
const fs = require('fs');
const soap = require('soap');
const taskSoap = require('./soap/task');
const path = require('path');

const app = express();
app.use(express.json());

//Supervisor me permite hacer refresco en caliente usando el comando "dev" que puse en el package.json
app.use('/api/tasks', taskRouter);//Permite meter acciones en un ciclo encadenado

app.use((rquest, response)=>{
    logger.warn("not found");
    response.status(404).send("not found");
})

const server = app.listen(3000, ()=>{
    logger.info("El servidor esta activo y corriendo en el puerto 3000");
    const wsdlPath = path.join(__dirname, 'soap', 'taskService.wsdl');
    const wsdl = fs.readFileSync(wsdlPath, 'utf-8');

    soap.listen(server, '/wsdl', taskSoap, wsdl);

}); //Añade el puerto de red que escucha a la app web
