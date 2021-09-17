import { Form, Input, Select, Checkbox, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, getUserData } from "../../../../redux/thunks/user.thunk";
import { useHistory } from "react-router";
import React from "react";
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

function Register() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const history = useHistory();

  const userRegister = (value) => {
    const user = {
      isAdmin: false,
      email: value.email,
      password: value.password,
      username: value.username,
      phone: value.phone,
      gender: value.gender,
    };

    dispatch(registerUser(user));
  };

  const onReset = () => {
    form.resetFields();
  };

  React.useEffect(() => {
    if (status === "register success") {
      message.success("Đăng ký thành viên thành công");
      onReset();
      dispatch(getUserData());
    } else if (status === "register fail") {
      message.error("Đăng ký thành viên thất bại");
    }
  }, [status, history]);

  return (
    <div className="log-out">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{
          prefix: "84",
        }}
        onFinish={userRegister}
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
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Xác nhận Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Vui lòng xác nhận password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Password nhập vào không trùng nhau!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
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

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Vui lòng đồng ý với điều khoản sử dụng")
                    ),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>Tôi đã đọc và đồng ý với các điều khoản</Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button className="login__btn" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
