const express = require('express')
const routerLivros = require('./routes/livro')
const cors = require('cors');
const routerFavoritos = require('./routes/favorito');

const app = express()

app.use(express.json());
app.use(cors({origin: '*'}));
app.use('/livros', routerLivros);
app.use('/favoritos', routerFavoritos);

const port = 8000

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
} )
