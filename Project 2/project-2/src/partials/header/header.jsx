import NavLinkWithIcon from "../../components/layout/header/navlink-with-icon/index";
import NavLinkWithLogo from "../../components/layout/header/navlink-with-logo/index";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <NavLinkWithIcon />

      <NavLinkWithLogo />
    </div>
  );
}

export default Header;
