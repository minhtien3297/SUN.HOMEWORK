import { Breadcrumb } from "antd";
import { HomeFilled } from "@ant-design/icons";
import "./styles.scss";

function BreadCrump({ breadLinks: { links, current } }) {
  return (
    <div className="breadcrump container">
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <HomeFilled style={{ color: "black" }} />
        </Breadcrumb.Item>
        {links.map((item, index) => {
          return (
            <Breadcrumb.Item key={index} href={item.href}>
              {item.name}
            </Breadcrumb.Item>
          );
        })}

        <Breadcrumb.Item className="breadcrump__current">
          {current}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrump;
