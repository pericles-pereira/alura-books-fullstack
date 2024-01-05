const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro } = require('../services/livro');
const {tratarErros} = require('../errors/tratarErros'); 

function getLivros(req, res) {
	try {
		res.send(getTodosLivros());
	} catch (err) {
		return tratarErros(err, res);
	}
}

function getLivro(req, res) {
	try {
		const id = req.params.id;

		if(id && Number(id)) {
			res.send(getLivroPorId(id));
			return;
		}

		throw new Error('422');
	} catch (err) {
		return tratarErros(err, res);
	}
}

function postLivro(req, res) {
	try {
		const livroNovo = req.body;
		
		if(req.body.nome) {
			insereLivro(livroNovo);

			res.status(201);
			res.send('Livro inserido com sucesso');
			return;
		}
		
		throw new Error('422');
	} catch (err) {
		if (err.message === '422') {
			return tratarErros(err, res, {mensagem: 'O campo nome é obrigatório'});
		}
		return tratarErros(err, res);
	}
}

function patchLivro(req, res) {
	try {
		const id = req.params.id;

		if(id && Number(id)) {
			const body = req.body;

			if(req.body.nome) {
				modificaLivro(body, id);

				res.send('Item modificado com sucesso');
				return;
			}
			throw new Error('422-bodyInválido');
		}

		throw new Error('422');
	} catch (err) {
		if (err.message === '422-bodyInválido') {
			return tratarErros(err, res, {mensagem: 'O campo nome é obrigatório'});
		}
		return tratarErros(err, res);
	}
}

function deleteLivro(req, res) {
	try {
		const id = req.params.id;
		
		if(id && Number(id)) {
			deletaLivro(id);
	
			res.send('Item deletado com sucesso');
			return;
		}

		throw new Error('422');
	} catch (err) {
		return tratarErros(err, res);
	}
}

module.exports = {
	getLivros,
	getLivro,
	postLivro,
	patchLivro,
	deleteLivro
}
