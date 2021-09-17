import { Table, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicketData } from "../../../redux/thunks/ticket.thunk";
import "./styles.scss";

function ManageRevenue() {
  const dispatch = useDispatch();
  const ticketsCart = useSelector((state) => state.ticket.tickets);
  const status = useSelector((state) => state.user.status);
  let totalRevenue = 0;
  let totalQuantity = 0;

  let ticketOrder = [];

  ticketsCart.map((order) => {
    Object.entries(order).map(([keys, ticket]) => {
      ticketOrder.push(ticket);
    });
  });

  let tickets = ticketOrder.filter((ticket) => isNaN(ticket));

  useEffect(() => {
    dispatch(getTicketData());

    if (status === "delete success") {
      message.success("Xoá thành công");
    } else if (status === "delete fail") {
      message.error("Xoá thất bại");
    }
  }, [ticketsCart, dispatch, status]);

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

  function countRevenue() {
    tickets.map((ticket) => (totalRevenue += ticket.price * ticket.quantity));
  }

  function countQuantity() {
    tickets.map((ticket) => (totalQuantity += ticket.quantity));
  }

  if (ticketsCart) {
    countQuantity();
    countRevenue();
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",

      render: (text, record) => tickets.indexOf(record) + 1,
    },
    {
      title: "Tên Phim",
      dataIndex: "movie",
      key: "movie",
      width: 150,
    },
    {
      title: "Ngày Chiếu",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Suất Chiếu",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Rạp Phim",
      dataIndex: "theater",
      key: "theater",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return <span>{formatMoney(text)}</span>;
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
      title: "Người Mua",
      dataIndex: "user",
      key: "user",
    },
  ];

  return (
    <div className="manage-revenue container">
      <h1 className="title">Quản Lý Doanh Thu</h1>

      <Table
        columns={columns}
        dataSource={tickets}
        bordered
        pagination={{
          defaultPageSize: 6,
          showSizeChanger: true,
          pageSizeOptions: ["6"],
        }}
        className="manage-revenue__table"
        summary={() => {
          return (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell colSpan={6}>Tổng Cộng</Table.Summary.Cell>
                <Table.Summary.Cell>{totalQuantity}</Table.Summary.Cell>
                <Table.Summary.Cell>
                  {formatMoney(totalRevenue)}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          );
        }}
      />
    </div>
  );
}

export default ManageRevenue;
