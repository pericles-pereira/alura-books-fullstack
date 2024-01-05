import logo from '../../images/logo.svg';
import type {ReactElement} from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
	display: flex;
    font-size: 30px;
`;

const ImagemLogo = styled.img`
	margin-right: 10px;	
`;

export default function Logo(): ReactElement {
	return (
		<LogoContainer>
			<ImagemLogo src={logo} alt='logo' className='logo-img' />
			<p><strong>Alura</strong>Books</p>
		</LogoContainer>
	);
}
