import mysqlConnection from 'mysql2/promise';
//Importamos mysqlConnection de la libreria mysql2/promise
//
const properties = {
	//estas son las propiedades de nuestra base de datos 
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'biblioteca',
};
export const pool = mysqlConnection.createPool(properties);
//exportamos nuestra conexion a la base de datos