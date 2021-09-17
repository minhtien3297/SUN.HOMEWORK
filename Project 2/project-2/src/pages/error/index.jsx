import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./styles.scss";

function Error() {
  return (
    <Result
      className="error"
      status="404"
      title="404"
      subTitle="Xin lỗi, trang bạn tìm không tồn tại"
      extra={
        <Link to="/">
          <Button type="primary">Quay lại trang chủ</Button>
        </Link>
      }
    />
  );
}

export default Error;
