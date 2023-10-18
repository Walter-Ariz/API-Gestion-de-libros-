import {pool} from './database.js';

class LibroController{

	async getAll(req,res){
		const [result] = await pool.query('SELECT * FROM libros');

		res.json(result);
	}

	async getOne(req,res){ 
		try{
		const libro = req.body;
		const id_libro = parseInt(libro.id);
		const [result] = await pool.query(`select * from libros WHERE id=?`, [id_libro] );
		
		if (result[0]!=undefined){
			res.json(result);
		} else{
			res.json({"Error":"El libro que busca no existe"});
		}
		}catch(e) {
			console.log(e);
		}
	}
    async add(req, res) {
		const libro = req.body;
		const [result] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, año, ISBN) VALUES (?, ?, ?, ? ,? )`,[libro.nombre, libro.autor, libro.categoria, libro.año, libro.ISBN]);
		res.json({"Libro Agregado": result.insertId});
	}

	async delete(req,res){
		const libro = req.body;
		const [result] = await pool.query (`DELETE FROM libros WHERE id=(?)`, [libro.id]);
		res.json({"Libros eliminados": result.affectedRows});
	}

	async update(req,res){
		const libro = req.body;
		const [result] = await pool.query(`UPDATE libros SET nombre =(?), autor=(?), categoria=(?), año=(?), ISBN=(?) WHERE id=(?)`,[libro.nombre, libro.autor, libro.categoria, libro.año, libro.ISBN, libro.id]);
		res.json({"Libros actualizados": result.changedRows});
	}
	

}
export const libro = new LibroController();