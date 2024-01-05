import {useState, type ReactElement, useEffect} from 'react';
import Input from '../Input';
import styled from 'styled-components';
import type {Livro} from '../../types/LivroType';
import {getLivros} from '../../services/livros';
import {postFavorito} from '../../services/favoritos';
import fotoLivro from '../../images/livro.png';

const PesquisaContainer = styled.section`
	background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
	color: #fff;
	text-align: center;
	padding: 85px 0;
	height: 270px;
	width: 100%;
`;

const Titulo = styled.h2`
	color: #fff;
	font-size: 36px;
	text-align: center;
	width: 100%;
`;

const Subtitulo = styled.h3`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 40px;
`;

const Resultado = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	cursor: pointer;

	p {
		width: 200px;
	}
	img {
		width: 100px;
	}
	&:hover {
		border: 1px solid white;
	}
`;

export default function Pesquisa(): ReactElement {
	const [livrosPesquisa, setLivrosPesquisa] = useState<Livro[]>([]);
	const [livros, setLivros] = useState<Livro[]>([]);

	useEffect(() => {
		getLivros()
			.then((livrosDaApi: Livro[]) => {
				setLivros(livrosDaApi);
			})
			.catch(error => {
				console.error('Erro geral:', error);
			});
	}, []);

	function insertFavorito(id: number): void {
		postFavorito(id)
			.then(() => {
				// eslint-disable-next-line no-alert
				alert(`Livro de ID: ${id} inserido!`);
			})
			.catch(error => {
				console.error('Erro geral:', error);
			});
	}

	return (
		<PesquisaContainer>
			<Titulo>Já sabe por onde começar?</Titulo>
			<Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
			<Input
				onBlur={evento => {
					const textoDigitado = evento.target.value;
					if (livros) {
						const resultadoPesquisa = livros.filter(livro => {
							if (textoDigitado.length === 0 || textoDigitado === '') {
								return false;
							}

							return livro.nome ?? ''
								.toLowerCase()
								.includes(textoDigitado.toLowerCase());
						});

						if (!resultadoPesquisa) {
							setLivrosPesquisa([]);
							return;
						}

						setLivrosPesquisa(resultadoPesquisa);
					}
				}}
				placeholder='Escreva sua próxima leitura'
			/>
			{livrosPesquisa.map(livro => (
				<Resultado key={livro.id} onClick={() => {
					insertFavorito(Number(livro.id));
				}}>
					<p>{livro.nome ?? ''}</p>
					<img src={fotoLivro} alt={`livro ${livro.nome ?? ''}`} />
				</Resultado>
			))}
		</PesquisaContainer>
	);
}
