import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { categoria, id } = useParams();

  

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>Categoría: {categoria}</p>
      <p>ID del Producto: {id}</p>
      
    </div>
  );
}

export default ProductDetail;
