import "./Type.scss";
import FilterCheckbox from "../filter-checkbox/Filter-checkbox";

function Type(props) {
  const { filter, setFilter } = props;
  const filterType = "type";

  return (
    <div className="type">
      <p className="fw-bold mb-3">Type</p>

      <FilterCheckbox
        filter={filter}
        filterType={filterType}
        setFilter={setFilter}
      />
    </div>
  );
}

export default Type;
