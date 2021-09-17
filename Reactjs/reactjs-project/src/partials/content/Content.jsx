import React from "react";
import "./Content.scss";
import Card from "../../components/content/card/Card";
import Sort from "../../components/content/sort/Sort";
import Paging from "../../components/content/paging/Paging";
import { useSelector } from "react-redux";

function Content() {
  const  filter  = useSelector((state) => state.product.filter);
  let showProduct = [];

  // show card product
  showProduct = filter.map((item, id) => {
    return <Card key={id} product={item} />;
  });

  return (
    <div className="content">
      <div className="container-fluid">
        <Sort />

        <div className="row g-4">{showProduct}</div>

        <Paging />
      </div>
    </div>
  );
}

export default Content;
