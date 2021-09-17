import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import "./styles.scss";

function PurchaseSuccess() {
  return (
    <Result
      className="purchase-success"
      status="success"
      title="Đã thanh toán thành công"
      extra={[
        <Link to="/now-showing">
          <Button key="buy" type="primary">
            Mua tiếp
          </Button>
        </Link>,
      ]}
    />
  );
}

export default PurchaseSuccess;
