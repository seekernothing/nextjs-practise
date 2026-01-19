import React from "react";

const ProductsDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log(slug);

  return <div>ProductsDetail</div>;
};

export default ProductsDetail;
