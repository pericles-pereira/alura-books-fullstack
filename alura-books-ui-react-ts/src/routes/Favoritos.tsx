import {useState, type ReactElement, useEffect} from 'react';
import styled from 'styled-components';
import type {Livro} from '../types/LivroType';
import {deleteFavorito, getFavoritos} from '../services/favoritos';
import livroImg from '../images/livro.png';

export default function Favoritos(): ReactElement {
	const [favoritos, setFavoritos] = useState<Livro[]>([]);

	function fetchFavoritos(): void {
		getFavoritos()
			.then((livrosDaApi: Livro[]) => {
				setFavoritos(livrosDaApi);
			})
			.catch(error => {
				console.error('Erro geral:', error);
			});
	}

	useEffect(() => {
		fetchFavoritos();
	}, []);

	function deletarFavorito(id: number): void {
		deleteFavorito(id)
			.then(() => {
				// eslint-disable-next-line no-alert
				alert(`Livro de ID: ${id} removido!`);
				fetchFavoritos();
			})
			.catch(error => {
				console.error('Erro geral:', error);
			});
	}

	return (
		<AppContainer>
			<div>
				<Titulo>Aqui estão seus livros favoritos:</Titulo>
				<ResultadoContainer>
					{favoritos.length !== 0 && favoritos.map(favorito => (
						<Resultado key={favorito.nome} onClick={() => {
							deletarFavorito(favorito.id);
						}}>
							<p>{favorito.nome}</p>
							<img src={livroImg}/>
						</Resultado>
					))}
				</ResultadoContainer>
			</div>
		</AppContainer>
	);
}

const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`;
