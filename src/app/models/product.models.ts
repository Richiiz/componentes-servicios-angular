// aqui estamos tipando nuestro array, es buena practica ya que asi sabemos que vamos a esperar de elemento o en este caso, nuestro array de productos.
export interface Product{
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}
