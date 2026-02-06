async function getProducts() {
  const shouldError = Math.random() > 0.5;

  if (shouldError) {
    throw new Error("failed to fetch products");
  }

  return [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
    { id: 4, name: "Four" },
    { id: 5, name: "Five" },
  ];
}

export default async function ErrorExample() {
  const products = await getProducts();

  return (
    <div>
      <h1>Product list</h1>
      <div className="grid gap-4 min-h-screen justify-center items-center">
        {products.map((p) => (
          <div key={p.id}>
            <h1> {p.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
