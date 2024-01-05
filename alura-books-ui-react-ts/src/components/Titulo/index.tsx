import styled from 'styled-components';

type Props = {
	cor?: string;
	tamanhofonte?: string;
	alinhamento?: string;
};

export const Titulo = styled.h2<Props>`
	width: 100%;
	padding: 30px 0;
	background-color: #FFF;
	color: ${props => props.cor ?? '#000'};
	font-size: ${props => props.tamanhofonte ?? '18px'};
	text-align: ${props => props.alinhamento ?? 'center'};
	margin: 0;
`;
