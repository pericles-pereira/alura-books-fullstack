import axios, {type AxiosResponse} from 'axios';
import type {Livro} from '../types/LivroType';

const favoritosApi = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: 'http://localhost:8000/favoritos',
});

export async function getFavoritos(): Promise<Livro[]> {
	try {
		const response = await favoritosApi.get<Livro[]>('/');
		return response.data;
	} catch (error) {
		console.error('Erro ao obter favoritos:', error);
		throw error;
	}
}

export async function postFavorito(id: number): Promise<AxiosResponse> {
	try {
		return await favoritosApi.post(`/${id}`);
	} catch (error) {
		console.error('Erro ao salvar favorito:', error);
		throw error;
	}
}

export async function deleteFavorito(id: number): Promise<AxiosResponse> {
	try {
		return await favoritosApi.delete(`/${id}`);
	} catch (error) {
		console.error('Erro ao salvar favorito:', error);
		throw error;
	}
}
