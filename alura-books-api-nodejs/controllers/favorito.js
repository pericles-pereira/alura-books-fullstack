const {tratarErros} = require('../errors/tratarErros'); 
const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require('../services/favorito');

function getFavoritos(req, res) {
	try {
		res.send(getTodosFavoritos());
	} catch (err) {
		return tratarErros(err, res);
	}
}

function postFavorito(req, res) {
	try {
		const id = req.params.id;

		if(id && Number(id)) {
			insereFavorito(id);
			res.status(201);
			res.send('Livro inserido com sucesso');
			return;
		}

		throw new Error('422');
	} catch (err) {
		return tratarErros(err, res);
	}
}

function deleteFavorito(req, res) {
	try {
		const id = req.params.id;
		
		if(id && Number(id)) {
			deletaFavoritoPorId(id);
	
			res.send('Favorito deletado com sucesso');
			return;
		}

		throw new Error('422');
	} catch (err) {
		return tratarErros(err, res);
	}
}


module.exports = {
	getFavoritos,
	deleteFavorito,
	postFavorito
}
