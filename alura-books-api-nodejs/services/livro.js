const fs = require('fs');

function getTodosLivros() {
	return JSON.parse(fs.readFileSync('livros.json'));
}

function getLivroPorId(id) {
	const livros = JSON.parse(fs.readFileSync('livros.json'));

	const livro = livros.filter(livro => livro.id === id)[0];

	if (!livro) {
		throw new Error('404');
	}

	return livro;
}

function insereLivro(livroNovo) {
	const livros = JSON.parse(fs.readFileSync('livros.json'));

	let NovoId = livros.reduce((acumulado, item) => {
		if (Number(item.id) > acumulado) {
			return item.id;
		}
		return acumulado;
	}, 0);

	NovoId++;

	const livro = {
		...livroNovo,
		id: String(NovoId)
	}

	const novaListaDeLivros = [ ...livros, livro ];

	fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id) {
	let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'));
	const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);

	if (indiceModificado < 0) {
		throw new Error('404');
	}

	const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes, id: livrosAtuais[indiceModificado].id };

	livrosAtuais[indiceModificado] = conteudoMudado;

	fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais));
}

function deletaLivro(id) {
	const livros = JSON.parse(fs.readFileSync('livros.json'));
	const novaLista = livros.filter(livro => livro.id !== id);

	if (livros.length === novaLista.length) {
		throw new Error('404');
	}

	fs.writeFileSync('livros.json', JSON.stringify(novaLista));
}

module.exports = {
	getTodosLivros,
	getLivroPorId,
	insereLivro,
	modificaLivro,
	deletaLivro
}
