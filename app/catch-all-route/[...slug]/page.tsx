export const productFilter = async ({
  params,
}: {
  params: Promise<{ slug: [] }>;
}) => {
  const { slug } = await params;
  console.log(slug);

  return <div>
    <h1>Product Filter</h1>
  </div>;
};
