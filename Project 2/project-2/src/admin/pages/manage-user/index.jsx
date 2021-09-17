import { Table, Space, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux/thunks/user.thunk";
import { deleteUser } from "../../../redux/thunks/user.thunk";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import ModalUser from "../../components/manage-user/modal/index";
import "./styles.scss";

function ManageUser() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  const [user, setUser] = useState();

  useEffect(() => {
    dispatch(getUserData());
    if (status === "delete success") {
      message.success("Xoá thành công");
    } else if (status === "delete fail") {
      message.error("Xoá thất bại");
    }
  }, [dispatch, status]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (user) => {
    setUser(user);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",

      render: (text, record) => users.indexOf(record) + 1,
    },
    {
      title: "Tên",
      dataIndex: "username",
      key: "username",
      width: 150,
    },
    {
      title: "Vai Trò",
      dataIndex: "isAdmin",
      key: "isAdmin",
      render: (row) => {
        if (row) {
          return <p>Admin</p>;
        } else if (!row) {
          return <p>User</p>;
        }
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Xoá",
      key: "delete",
      render: (text, record, index, row) => (
        <Space size="middle">
          <ModalUser
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
            user={user}
          />

          <EditFilled
            className="edit__icon"
            onClick={() => showModal(record)}
          />

          <DeleteFilled
            className="delete__icon"
            onClick={() => dispatch(deleteUser(record.id))}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="manage-user container">
      <h1 className="title">Quản Lý User</h1>

      <Table
        columns={columns}
        dataSource={users}
        bordered
        pagination={{
          defaultPageSize: 4,
          showSizeChanger: true,
          pageSizeOptions: ["4"],
        }}
        className="manage-user__table"
      />
    </div>
  );
}

export default ManageUser;
