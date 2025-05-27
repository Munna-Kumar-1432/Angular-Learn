import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProductData() {
    return [
      {
        id: 1,
        name: 'Wireless Headphones',
        description:
          'Noise-cancelling over-ear headphones with 40-hour battery life.',
        price: 129.99,
        category: 'Electronics',
      },
      {
        id: 2,
        name: 'Ergonomic Office Chair',
        description: 'Adjustable mesh chair with lumbar support and headrest.',
        price: 249.5,
        category: 'Furniture',
      },
      {
        id: 3,
        name: 'Smart Water Bottle',
        description:
          'Insulated stainless steel bottle that tracks hydration via Bluetooth.',
        price: 59.95,
        category: 'Health',
      },
      {
        id: 4,
        name: 'Portable Projector',
        description:
          'Compact projector with 1080p resolution and HDMI/USB support.',
        price: 199.0,
        category: 'Gadgets',
      },
      {
        id: 5,
        name: 'Organic Cotton T-Shirt',
        description:
          'Eco-friendly, soft cotton T-shirt available in multiple colors.',
        price: 24.99,
        category: 'Clothing',
      },
    ];
  }
}
