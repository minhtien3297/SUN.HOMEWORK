import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router";
import {
  userAuthorize,
  userAuthorizeError,
} from "../../../../redux/actions/user.actions";
import React from "react";
import "./styles.scss";

function LogIn(props) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  const history = useHistory();

  React.useEffect(() => {
    if (status === "login success") {
      message.success("Đăng nhập thành công");
    } else if (status === "login fail") {
      message.error("Email hoặc password sai");
    }
  }, [status, history]);

  const userLogin = (value) => {
    const user = {
      email: value.email,
      password: value.password,
    };

    let userCorrect = props.users.find(
      (item) => item.email === user.email && item.password === user.password
    );

    if (userCorrect) {
      dispatch(userAuthorize(userCorrect));
      if (userCorrect.isAdmin) {
        history.push("/admin/manage-user");
      } else {
        history.push("/");
      }
    } else {
      dispatch(userAuthorizeError());
    }
  };

  return (
    <div className="log-in">
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={userLogin}
        autoComplete="on"
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button className="login__btn" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LogIn;
