function tratarErros(err, res, opcoes = {}) {
	if (err.message === '404') {
		res.status(404);
		res.send('Id não encontrado');
		return res;
	}	

	if(err.message === '422') {
		res.status(422);
		if(opcoes) {
			res.send(opcoes.mensagem);
			return res;
		}
		res.send('Id inválido');
		return res;
	}

	res.status(500);
	res.send(err.message);
	return res;
}

module.exports = {
	tratarErros
}
