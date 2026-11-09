import type { Product, ProductsResponse } from '../types/product';

const REMOTE_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';






  
const API_URL = import.meta.env.DEV
  ? '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
  : REMOTE_URL;

export async function getProducts(): Promise<Product[]> {
  let response: Response;

  try {
    response = await fetch(API_URL);
  } catch {
    throw new Error('Não foi possível conectar ao servidor de produtos.');
  }

  if (!response.ok) {
    throw new Error('Não foi possível carregar os produtos.');
  }

  const data: ProductsResponse = await response.json();
  return data.products;
}