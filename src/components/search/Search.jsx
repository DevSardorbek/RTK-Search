import React, { useState } from "react";
import "../../sass/__search.scss";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { HiCamera } from "react-icons/hi";
import { useGetSearchProductsQuery } from "../../context/productApi/productApi";
import { memo } from "react";
import SingleSection from "../singleSection/SingleSection";

const Search = () => {
  const [value, setValue] = useState("");
  const { data, error, isLoading } = useGetSearchProductsQuery({ q: value });

  console.log(data);
  return (
    <div className="search__wrapper">
      <div className="container">
        <div className="search__section">
          <h1>GOOGLE</h1>
          <div className="search__input">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Search..."
            />
            <MdOutlineKeyboardVoice />
            <HiCamera />
          </div>
          {value.trim() ? <SingleSection data={data?.products} /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default memo(Search);

// import React, { useState } from "react";
// import "../../sass/__search.scss";
// import { MdOutlineKeyboardVoice } from "react-icons/md";
// import { HiCamera } from "react-icons/hi";
// import { useGetSearchProductsQuery } from "../../context/productApi/productApi";
// import { memo } from "react";

// const Search = () => {
//   const [value, setValue] = useState("");
//   const { data, error, isLoading } = useGetSearchProductsQuery({ q: value });

//   return (
//     <div className="search__wrapper">
//       <div className="container">
//         <div className="search__section">
//           <h1>GOOGLE</h1>
//           <div className="search__input-container">
//             <input
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//               type="text"
//               placeholder="Search..."
//             />
//             <MdOutlineKeyboardVoice />
//             <HiCamera />
//           </div>
//           {isLoading && <p>Loading...</p>}
//           {error && <p>Error: {error.message}</p>}
//           {data && value && (
//             <ul>
//               {data.products.map((product, index) => (
//                 <li key={index}>{product.name}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default memo(Search);
