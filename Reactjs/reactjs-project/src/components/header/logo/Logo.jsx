/* eslint-disable jsx-a11y/anchor-is-valid */
import "./logo.scss";

const logo = "/assets/logos/logo-is.png";

function Logo() {
  return (
    <div className="logo">
      <a href="#" className="logo__link d-flex justify-content-around align-items-center">
        <img src={logo} alt="logo of the web" className="logo__image" />
        <p className="brand__name">amazing</p>
      </a>
    </div>
  );
}

export default Logo;
