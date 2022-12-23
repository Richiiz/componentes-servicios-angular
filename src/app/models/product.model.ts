import { CreativeEffectEvents } from "swiper/types";

export interface Category {
  id: string;
  name: string;
}
// aqui estamos tipando nuestro array, es buena practica ya que asi sabemos que vamos a esperar de elemento o en este caso, nuestro array de productos.
export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
  taxes?: number;
}

// con el Omit le indicamos cuales son los campos que queremos omitir y cuales queremos clonar
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

// Partial lo que hace es asignarle a todos los elementos el ? para que se vuelvan opcionales
// Estamos obteniendo los elementos de CreateProductDTO para evitar repetir codigo.
export interface UpdateProductDTO extends Partial<CreateProductDTO> { }
