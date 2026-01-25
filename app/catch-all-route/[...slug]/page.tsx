export const productFilter = async ({
  params,
}: {
  params: Promise<{ slug: [] }>;
}) => {
  const { slug } = await params;
  console.log(slug);

  return <div>
    
  </div>;
};
