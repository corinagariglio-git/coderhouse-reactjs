const PRODUCTS = [
  {
    id: "1",
    name: "Calza básica lila",
    category: "calzas",
    price: 18000,
    stock: 10,
    description:
      "Calza deportiva en tono lila pastel, tiro alto y tela suave para entrenar cómoda.",
  },
  {
    id: "2",
    name: "Top deportivo rosa",
    category: "tops",
    price: 12000,
    stock: 8,
    description:
      "Top deportivo rosa pastel, soporte medio, ideal para funcional y gimnasio.",
  },
  {
    id: "3",
    name: "Buzo oversize lavanda",
    category: "buzos",
    price: 23000,
    stock: 5,
    description:
      "Buzo oversize color lavanda, perfecto para entrar y salir del gym abrigada.",
  },
  {
    id: "4",
    name: "Calza compresiva negra con detalle lila",
    category: "calzas",
    price: 19500,
    stock: 7,
    description:
      "Calza negra con detalles lila en los laterales, tela compresiva y tiro alto.",
  },
];

export function getProducts(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        const filtered = PRODUCTS.filter(
          (prod) => prod.category === categoryId
        );
        resolve(filtered);
      } else {
        resolve(PRODUCTS);
      }
    }, 700);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productFound = PRODUCTS.find((prod) => prod.id === id);
      resolve(productFound || null);
    }, 700);
  });
}
