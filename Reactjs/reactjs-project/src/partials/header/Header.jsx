import Logo from "../../components/header/logo/Logo";
import SearchBar from "../../components/header/search-bar/Search-bar";
import "./header.scss";

function Header() {
  return (
    <div className="header d-flex align-items-center">
      <Logo />

      <SearchBar />
    </div>
  );
}

export default Header;
