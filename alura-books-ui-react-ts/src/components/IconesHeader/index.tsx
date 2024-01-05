import type {ReactElement} from 'react';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];

const Lista = styled.ul`
	display: flex;
	align-items: center;
`;

const Item = styled.li`
	margin-right: 40px;
	width: 25px;	
`;

export default function IconesHeader(): ReactElement {
	return (
		<Lista>
			{icones.map(icone => (
				<Item key={icones.indexOf(icone) + 1} className='icone'>
					<img src={icone}
						alt={`ícone ${icones.indexOf(icone) + 1}`}
					/>
				</Item>
			))}
		</Lista>
	);
}
