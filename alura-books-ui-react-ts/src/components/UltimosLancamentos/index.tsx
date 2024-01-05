import type {ReactElement} from 'react';
import {livros} from './dadosUltimosLancamentos';
import styled from 'styled-components';
import {Titulo} from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../images/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

export default function UltimosLancamentos(): ReactElement {
	return (
		<UltimosLancamentosContainer>
			<Titulo
				cor='#EB9B00'
				tamanhofonte='36px'
			>Últimos Lançamentos</Titulo>

			<NovosLivrosContainer>
				{livros.map(livro => (
					<img key={livro.id} src={livro.src} alt={`livro ${livro.nome}`} />
				))}
			</NovosLivrosContainer>
			<CardRecomenda
				titulo='Talvez você se interesse por:'
				subtitulo='Angular 11'
				descricao='Construindo uma aplicação com a plataforma Google'
				img={imagemLivro}
			/>
		</UltimosLancamentosContainer>
	);
}
