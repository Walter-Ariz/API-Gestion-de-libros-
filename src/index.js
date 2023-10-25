//Este mismo sera el encargado en inicializar nuestro servicio 
//se encargara tanto de crear el servidor como de otras configuraciones 
//necesarias para nuestra api-rest 
import express from 'express';//importamos express(el servidor de la api-rest)//

import morgan from 'morgan';//para poder ver las solicitudes de los clientes 

import {router} from './routes.js';


const app = express(); //esto es para crear el servidor de la api-rest

app.set('port', 3000);//puerto para escuchar las solicitudes

app.use(morgan('dev'));//para ver la solicitudes
app.use(express.json());//permite interpretar los objetos json de las solicitudes de los clientes
app.use(router);


app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
})
