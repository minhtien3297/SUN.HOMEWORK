import { Table, Space, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getMovieData } from "../../../redux/thunks/movie.thunk";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import ModalFilm from "../../components/manage-film/modal/index";
import "./styles.scss";

function ManageFilm() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const status = useSelector((state) => state.movie.status);
  const [movie, setMovie] = useState();

  useEffect(() => {
    dispatch(getMovieData());

    if (status === "delete success") {
      message.success("Xoá thành công");
    } else if (status === "delete fail") {
      message.error("Xoá thất bại");
    }
  }, [dispatch, status]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (movie) => {
    setMovie(movie);
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

      render: (text, record) => movies.indexOf(record) + 1,
    },
    {
      title: "Tên Phim",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Đạo Diễn",
      dataIndex: "director",
      key: "director",
    },
    {
      title: "Diễn viên",
      dataIndex: "actors",
      key: "actors",
      ellipsis: true,
    },
    {
      title: "Thế loại",
      dataIndex: "type",
      key: "type",
      ellipsis: true,
    },
    {
      title: "Trạng Thái",
      dataIndex: "status",
      key: "status",
      render: (row) => {
        if (row === "now-showing") {
          return <span>Đang Khởi Chiếu</span>;
        } else if (row === "incoming") {
          return <span>Sắp Công Chiếu</span>;
        }
      },
    },
    {
      title: "Xoá",
      key: "delete",
      render: (text, record, index, row) => (
        <Space size="middle">
          <ModalFilm
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
            movie={movie}
          />

          <EditFilled
            className="edit__icon"
            onClick={() => showModal(record)}
          />

          <DeleteFilled
            className="delete__icon"
            onClick={() => dispatch(deleteMovie(record.id))}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="manage-film container">
      <h1 className="title">Quản Lý Phim</h1>

      <Table
        columns={columns}
        dataSource={movies}
        bordered
        pagination={{
          defaultPageSize: 7,
          showSizeChanger: true,
          pageSizeOptions: ["7"],
        }}
        className="manage-film__table"
      />
    </div>
  );
}

export default ManageFilm;
