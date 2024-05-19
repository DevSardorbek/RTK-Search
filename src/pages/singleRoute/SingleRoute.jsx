// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchProductById } from "../../context/productApi/productApi";
// import { toggleSingle } from "../../context/singleSlice"; // SingleSlice dan toggleSingle ni import qilamiz

// const SingleRoute = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { product, status, error } = useSelector((state) => state.product);
//   const { value: single } = useSelector((state) => state.single); // SingleSlice dan single ni import qilamiz

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchProductById(id));
//     }
//   }, [dispatch, id]);

//   const handleToggleSingle = (product) => {
//     dispatch(toggleSingle(product));
//   };

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {product && (
//         <>
//           <h1>{product.title}</h1>
//           <img src={product.images[0]} alt={product.title} />
//           <p>{product.description}</p>
//           <span>Price: ${product.price}</span>
//           {/* Single qo'shish/tashlash tugmasi */}
//           <button onClick={() => handleToggleSingle(product)}>
//             {single.some((item) => item.id === product.id)
//               ? "Remove from Single"
//               : "Add to Single"}
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default SingleRoute;
