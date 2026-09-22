import React from "react";

const ParticularProduct = async ({ params }) => {
  const { id } = await params;
  if (!id) {
    notFound();
  }
  return <div>{id}</div>;
};

export default ParticularProduct;
