import { Modal, Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateMovie } from "../../../../redux/thunks/movie.thunk";
import "./styles.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
};

const validateMessages = {
  required: "${label} không được để trống",
};

function ModalFilm({ isModalVisible, handleCancel, movie }) {
  const [src, setSrc] = useState("");
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.movie.status);

  useEffect(() => {
    if (movie) {
      onFill();

      setSrc(movie.src);
    }
  }, [movie, status, isModalVisible]);

  const onFill = () => {
    form.setFieldsValue({
      name: movie.name,
      director: movie.director,
      actors: movie.actors,
      type: movie.type,
      start: movie.start,
      time: movie.time,
      language: movie.language,
      intro: movie.intro,
      status: movie.status,
    });
  };

  const updateMovieByValue = (value) => {
    const movieUpdate = {
      id: movie.id,
      src: movie.src,
      name: value.name,
      director: value.director,
      actors: value.actors,
      type: value.type,
      start: value.start,
      time: value.time,
      language: value.language,
      intro: value.intro,
      status: value.status,
    };

    handleCancel();
    dispatch(updateMovie(movieUpdate));
  };

  return (
    <Modal
      title="Thông Tin Phim"
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
      width={800}
      className="modal"
    >
      <img className="modal__img" src={src} alt="banner" />

      <Form
        {...layout}
        name="update"
        form={form}
        onFinish={updateMovieByValue}
        validateMessages={validateMessages}
      >
        <Form.Item name="name" label="Tên Phim" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="director"
          label="Đạo Diễn"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="actors" label="Diễn Viên" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="type" label="Thể Loại" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="start" label="Khởi Chiếu" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="time" label="Thời Lượng" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="language"
          label="Ngôn Ngữ"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="status"
          label="Trạng Thái"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="intro" label="Giới Thiệu">
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" className="login__btn" htmlType="submit">
            Lưu Thay Đổi
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalFilm;
