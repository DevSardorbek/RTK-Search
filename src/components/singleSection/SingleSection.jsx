import React from "react";
import { useNavigate } from "react-router-dom";
const SingleSection = ({ data }) => {
  const navigate = useNavigate();
  let searchItem = data?.map((el) => (
    <div onClick={() => navigate(`/product/${el.id}`)} key={el.id}>
      <img src={el.images[0]} alt="" />
      <span>{el.title}</span>
    </div>
  ));
  return <div className="search__items">{searchItem}</div>;
};

export default SingleSection;
