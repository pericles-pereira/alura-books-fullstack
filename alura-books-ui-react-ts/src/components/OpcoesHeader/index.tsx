import styled from 'styled-components';
import type {ReactElement} from 'react';
import {Link} from 'react-router-dom';

const Lista = styled.ul`
	display: flex;
`;

const Item = styled.li`
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100%;
	padding: 0 5px;
	cursor: pointer;
	min-width: 120px;	
`;

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

export default function OpcoesHeader(): ReactElement {
	return (
		<Lista>
			{textoOpcoes.map(texto => (
				<Link style={{textDecoration: 'none'}}
					to={`/${texto.toLowerCase()}`}
					key={texto}>
					<Item><p>{texto}</p></Item>
				</Link>
			))}
		</Lista>
	);
}
