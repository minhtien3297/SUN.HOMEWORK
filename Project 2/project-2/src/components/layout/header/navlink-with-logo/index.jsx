import { Row, Col, Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.scss";

const logoCGV = "/assets/logo/logo-header/cgvlogo.png";
const logoCine = "/assets/logo/logo-header/kenhcine.gif";
const logoTicket = "/assets/logo/logo-header/mua-ve_ngay.png";

const navLink = [
  {
    label: "PHIM",
    to: "/now-showing",
  },
  {
    label: "RẠP CGV",
    to: "/theater-info",
  },
  {
    label: "THÀNH VIÊN",
    to: "/user-info",
  },
  {
    label: "CULTURE PLEX",
    to: "#",
  },
];

const adminNavLink = [
  {
    label: "QUẢN LÝ USER",
    to: "/admin/manage-user",
  },
  {
    label: "QUẢN LÝ DOANH THU",
    to: "/admin/manage-revenue",
  },
  {
    label: "QUẢN LÝ PHIM",
    to: "/admin/manage-film",
  },
];

const menuShow = navLink.map((item, index) => {
  return (
    <Menu.Item key={index} icon={item.icon}>
      {item.label}
    </Menu.Item>
  );
});

function NavLinkWithLogo() {
  const isAdmin = useSelector((state) => state.user.user.isAdmin);

  const navLinkShow = navLink.map((item, index) => {
    return (
      <li key={index}>
        <Link className="nav__link" to={item.to}>
          {item.label}
        </Link>
      </li>
    );
  });

  const adminNavLinkShow = adminNavLink.map((item, index) => {
    return (
      <li key={index}>
        <Link className="nav__link" to={item.to}>
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <div
      className="header__navbar--bottom"
      style={{
        background: `url("/assets/img/background/bg-top.png") `,
      }}
    >
      <Row className="navbar container">
        <Col xs={24} lg={4} className="logo">
          <Link to="/">
            <img src={logoCGV} alt="logo" />
          </Link>
        </Col>
        <Col xs={0} lg={12}>
          {!isAdmin && <ul className="nav__item">{navLinkShow}</ul>}
          {isAdmin && <ul className="nav__item">{adminNavLinkShow}</ul>}
        </Col>
        {!isAdmin && (
          <Col xs={0} lg={8} className="logo__group">
            <img src={logoCine} alt="gif" />
            <img src={logoTicket} alt="mua vé ngay" />
          </Col>
        )}
      </Row>

      <br />

      <Row>
        <Col xs={24} lg={0}>
          <Menu mode="horizontal">{menuShow}</Menu>
        </Col>
      </Row>
    </div>
  );
}

export default NavLinkWithLogo;
