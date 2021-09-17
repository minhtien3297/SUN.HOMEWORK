import Header from "./partials/header/Header";
import Sidebar from "./partials/sidebar/Sidebar";
import Content from "./partials/content/Content";
import React from "react";
import { useDispatch } from "react-redux";
import { getProductsData, getFilterData } from "./redux/thunk/product.thunk";

function App() {
  const dispatch = useDispatch();

  /**
   * Fetch data
   */
  React.useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getFilterData());
  }, [dispatch]);

  return (
    <div className="App">
      {/* header */}
      <Header />

      {/* sidebar */}
      <Sidebar />

      {/* content */}
      <Content />
    </div>
  );
}

export default App;
