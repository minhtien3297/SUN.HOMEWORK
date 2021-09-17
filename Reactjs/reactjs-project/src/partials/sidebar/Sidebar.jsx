import "./sidebar.scss";
import Categories from "../../components/sidebar/categories/Categories";
import Filter from "../../components/sidebar/filters/Filters";
import Clear from "../../components/sidebar/clear/Clear";

function SideBar() {
  return (
    <div className="sidebar">
      <Clear />

      <Categories  />
      <hr />

      <Filter />
    </div>
  );
}

export default SideBar;
