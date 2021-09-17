import { Tabs } from "antd";
import LogIn from "../../components/pages/login-logout/login/index";
import Register from "../../components/pages/login-logout/register/index";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../redux/thunks/user.thunk";
import React from "react";
import "./styles.scss";

const { TabPane } = Tabs;

function LoginLogout() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const users = useSelector((state) => state.user.users);

  return (
    <div className="login-logout container">
      <Tabs className="tabs" defaultActiveKey="1" centered>
        <TabPane tab="ĐĂNG NHẬP" key="1">
          <LogIn users={users} />
        </TabPane>
        <TabPane tab="ĐĂNG KÝ" key="2">
          <Register />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default LoginLogout;
