import { Modal, Form, Input, Select, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateUser } from "../../../../redux/thunks/user.thunk";
import "./styles.scss";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="86">+84</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

function ModalUser(props) {
  const isModalVisible = props.isModalVisible;
  const handleCancel = props.handleCancel;
  const user = props.user;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    if (user) {
      onFill();
    }
  }, [user, status, isModalVisible]);

  const onFill = () => {
    form.setFieldsValue({
      email: user.email,
      username: user.username,
      phone: user.phone,
      gender: user.gender,
    });
  };

  const updateUserByValue = (value) => {
    const userUpdate = {
      id: user.id,
      isAdmin: false,
      email: value.email,
      password: user.password,
      username: value.username,
      phone: value.phone,
      gender: value.gender,
    };

    handleCancel();
    dispatch(updateUser(userUpdate));
  };

  return (
    <Modal
      title="Thông tin user"
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="update"
        initialValues={{
          prefix: "84",
        }}
        onFinish={updateUserByValue}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Không đúng định dạng email!",
            },
            {
              required: true,
              message: "Vui lòng nhập email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="username"
          label="Họ và Tên"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ và tên!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
        >
          <Select placeholder="Chọn giới tính">
            <Option value="nam">Nam</Option>
            <Option value="nữ">Nữ</Option>
            <Option value="khác">Khác</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" className="login__btn" htmlType="submit">
            Lưu Thay Đổi
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalUser;
