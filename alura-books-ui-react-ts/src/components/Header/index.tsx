import type {ReactElement} from 'react';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderContainer = styled.header`
	display: flex;
    background-color: #FFF;
	justify-content: center;
`;

export default function Header(): ReactElement {
	return (
		<HeaderContainer>
			<Link to='/' style={{textDecoration: 'none'}}>
				<Logo />
			</Link>
			<OpcoesHeader />
			<IconesHeader />
		</HeaderContainer>
	);
}
