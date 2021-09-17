import { Divider } from "antd";
import "./styles.scss";

function LogoTitle(props) {
  return (
    <div className="logo-title container">
      <Divider>
        <img className="title" src={props.src} alt="title" />
      </Divider>
    </div>
  );
}

export default LogoTitle;
