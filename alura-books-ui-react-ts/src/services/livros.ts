import axios from 'axios';
import type {Livro} from '../types/LivroType';

const livrosApi = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: 'http://localhost:8000/livros',
});

export async function getLivros(): Promise<Livro[]> {
	try {
		const response = await livrosApi.get<Livro[]>('/');
		return response.data;
	} catch (error) {
		console.error('Erro ao obter livros:', error);
		throw error;
	}
}
