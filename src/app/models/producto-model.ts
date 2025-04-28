export interface ProductoCatalogoModel {
    id: number; // ID del producto
    categoria: string; // Categoría del producto
    nombre: string; // Nombre del producto
    descripcion: string; // Descripción del producto
    valoracion: number; // Valoración del producto
    imagen?: string; // URL de la imagen del producto (opcional)
    precio: number; // Precio del producto
}

export interface CategoriaModel {
    id: number; // ID de la categoría
    nombre: string; // Nombre de la categoría
    descripcion: string; // Descripción de la categoría
    imagen: string; // URL de la imagen de la categoría
}

export interface ProductoCarritoModel {
    id: number; // ID del producto
    nombre: string; // Nombre del producto
    precio: number; // Precio del producto
    cantidad: number; // Cantidad del producto en el carrito
    subtotal: number; // Subtotal del producto (precio * cantidad)
}
