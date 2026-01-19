import Link from "next/link";
import React from "react";

const Products = () => {
  const products = [
    { id: 1, title: "Mobile", price: 540 },
    { id: 2, title: "Laptop", price: 300 },
    { id: 3, title: "Keyboard", price: 250 },
    { id: 4, title: "Mouse", price: 100 },
  ];
  return (
    <div>
      <h1 className="text-red-700 text-2xl p-2 font-extrabold text-center ">
        This is a product page
      </h1>
      
     

      {products.map((pro) => {

        return (
          <div className="border black p-4 m-4 " key={pro.id}>
            <h2>{pro.title}</h2>{" "}
            <span>
              {" "}
              <h3>{pro.price}$</h3>
            </span>
            

            <Link href={`/products/${pro.id}`}>
            View details
            </Link>
          </div>
        );

      })}
    </div>
  );
};

export default Products;
