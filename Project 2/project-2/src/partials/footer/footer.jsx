import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import FooterList from "../../components/layout/footer/footer-list/index";
import "./footer.scss";

const logoCine = "/assets/logo/logo-footer/brand-type-film-footer_ver2.png";

const logoCJ = "/assets/logo/logo-footer/CJ-logo.png";

const CGVList = {
  isNavLink: true,
  title: "CGV Việt Nam",
  list: [
    "Giới Thiệu",
    "Tiện Ích Online",
    "Thẻ Quà Tặng",
    "Tuyển Dụng",
    "Liên Hệ Quảng Cáo CGV",
  ],
};

const TermList = {
  isNavLink: true,
  title: "Điều Khoản Sử Dụng",
  list: [
    "Điều Khoản Chung",
    "Điều Khoản Giao Dịch",
    "Chính Sách Thanh Toán",
    "Chính Sách Bảo Mật",
    "Câu Hỏi Thường Gặp",
  ],
};

const ConnectList = {
  isIcon: true,
  title: "Kết Nối Với Chúng Tôi",
  list: [
    {
      src: "/assets/logo/logo-footer/bg-social-footer-40.png",
      alt: "social icon",
    },
    {
      src: "/assets/logo/logo-footer/cong-thuong.PNG",
      alt: "Bộ công thương icon",
    },
  ],
};

const CustomerCareList = {
  title: "Chăm Sóc Khách Hàng",
  list: [
    "Hotline: 1900 6017",
    "Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)",
    "Email hỗ trợ: hoidap@cgv.vn",
  ],
};

const CJCGV = {
  title: "CÔNG TY TNHH CJ CGV VIETNAM",
  list: [
    "Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.",
    "Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.",
    "Hotline: 1900 6017",
    "COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .",
  ],
};

function Footer() {
  const isAdmin = useSelector((state) => state.user.user.isAdmin);

  return (
    <div className="footer">
      {!isAdmin && (
        <div>
          <hr className="footer__divider" />
          <div className="container">
            <img className="logoCine" src={logoCine} alt="type of cine" />
          </div>

          <hr className="footer__divider" style={{ marginTop: "0px" }} />

          <Row className="container">
            <Col xs={24} md={6}>
              <FooterList data={CGVList} />
            </Col>
            <Col xs={24} md={6}>
              <FooterList data={TermList} />
            </Col>
            <Col xs={24} md={6}>
              <FooterList data={ConnectList} />
            </Col>
            <Col xs={24} md={6}>
              <FooterList data={CustomerCareList} />
            </Col>
          </Row>

          <hr className="footer__divider" />
          <Row className="container">
            <Col xs={{ span: 24 }} md={4}>
              <img className="footer__logoCJ" src={logoCJ} alt="logo" />
            </Col>
            <Col xs={24} md={20}>
              <FooterList data={CJCGV} />
            </Col>
          </Row>

          <br />
        </div>
      )}
      <div
        className="footer__bottom"
        style={{
          background: `url("/assets/img/background/bg-bottom-footer.jpg") `,
        }}
      ></div>
    </div>
  );
}

export default Footer;
