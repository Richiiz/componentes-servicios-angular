// aqui estamos tipando nuestro array, es buena practica ya que asi sabemos que vamos a esperar de elemento o en este caso, nuestro array de productos.
export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}
export interface Category {
  id: string;
  name: string;
}
