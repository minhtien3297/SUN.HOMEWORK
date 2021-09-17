import { Table, Space, Popconfirm, message, Button } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import { DeleteFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeTicketFromWishList } from "../../redux/actions/wishList.actions";
import { removeALLTicketFromWishList } from "../../redux/actions/wishList.actions";
import { addWishListData } from "../../redux/thunks/wishList.thunk";
import "./styles.scss";

/**
 * money format
 */
function formatMoney(money) {
  let moneyFormatted = money
    .toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    })
    .replace(/[a-z]{3}/i, "đ")
    .trim();

  return moneyFormatted;
}

function TicketCart() {
  const Alltickets = useSelector((state) => state.wishList.tickets);
  const user = useSelector((state) => state.user.user);
  const tickets = Alltickets.filter((ticket) => ticket.user === user.username);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.wishList.status);

  function confirmDeleteCart() {
    dispatch(removeALLTicketFromWishList());
  }

  function confirmDeleteTicket(ticket) {
    dispatch(removeTicketFromWishList(ticket));
  }

  React.useEffect(() => {
    if (status === "delete all success") {
      message.success("Đã xoá đơn hàng thành công");
    } else if (status === "delete success") {
      message.success("Đã xoá vé thành công");
    }
  }, [status]);

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tên Phim",
      dataIndex: "movie",
      key: "movie",
      width: 150,
    },
    {
      title: "Ngày",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Rạp",
      dataIndex: "theater",
      key: "theater",
    },
    {
      title: "Thời Gian",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return <p>{formatMoney(text)}</p>;
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Tổng",
      dataIndex: "total",
      key: "total",
      render: (text, row) => {
        let total = 0;

        total = row.quantity * row.price;

        return <p>{formatMoney(total)}</p>;
      },
    },
    {
      title: "Xoá",
      key: "delete",
      render: (row) => (
        <Space size="middle">
          <DeleteFilled onClick={() => confirmDeleteTicket(row)} />
        </Space>
      ),
    },
  ];

  return (
    <div className="ticket-cart container">
      <Table
        columns={columns}
        dataSource={tickets}
        bordered
        className="ticket__table"
        summary={(pageData) => {
          let total = 0;

          pageData.forEach(({ price, quantity }) => {
            total += price * quantity;
          });

          return (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell colSpan={7}>
                  Tổng Cộng Phải Thanh Toán
                </Table.Summary.Cell>
                <Table.Summary.Cell>{formatMoney(total)}</Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          );
        }}
      />

      <div className="btn__group">
        <Link to="/now-showing">
          <Button className="btn" type="primary">
            Tiếp tục mua
          </Button>
        </Link>

        <Popconfirm
          placement="top"
          title="Bạn có chắc chắn muốn xoá đơn hàng?"
          onConfirm={confirmDeleteCart}
          okText="Đồng ý"
          cancelText="Huỷ"
        >
          <Button className="btn" type="primary" danger>
            Huỷ đơn hàng
          </Button>
        </Popconfirm>

        <Link to="/purchase-success">
          <Button
            className="btn success"
            type="primary"
            success
            onClick={() => dispatch(addWishListData(Alltickets))}
          >
            Thanh toán
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default TicketCart;
