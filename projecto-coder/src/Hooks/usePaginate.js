/* 
import { useState } from "react";

export const usePaginate = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage); // 1.5 --> 2

  const paginate = (numPage) => setCurrentPage(numPage); // poaginate me permite cambiar de pagina

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage, //posicion inicio
    currentPage * itemsPerPage //posicion final
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    } else {
      console.log("no hay mas paginas");
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    } else {
      console.log("no hay mas paginas");
    }
  };

  const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    paginate,
    totalPagesArray,
    currentData,
  };
};
*/

const hola = [

  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { "rate": 3.9, "count": 120 }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { "rate": 4.1, "count": 259 }
  }

]

// categorias: 
// electronics - clothing - jewelery