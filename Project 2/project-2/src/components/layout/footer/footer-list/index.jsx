import { List } from "antd";
import "./style.scss";

function FooterList({ data: { title, list, isIcon, isNavLink } }) {
  return (
    <div className="footer__list">
      <List
        itemLayout="horizontal"
        header={<p className="footer__list__header">{title}</p>}
        dataSource={list}
        renderItem={(item, index) => {
          if (isNavLink) {
            return (
              <List.Item>
                <List.Item.Meta
                  key={index}
                  description={
                    <a href="#." className="footer__list__description">
                      {item}
                    </a>
                  }
                />
              </List.Item>
            );
          } else if (isIcon) {
            return (
              <List.Item>
                <List.Item.Meta
                  className="footer--center"
                  key={index}
                  description={
                    <img
                      className="footer__list__img"
                      src={item.src}
                      alt={item.alt}
                    />
                  }
                />
              </List.Item>
            );
          } else {
            return (
              <List.Item key={index} className="footer__list__description">
                {item}
              </List.Item>
            );
          }
        }}
      />
    </div>
  );
}

export default FooterList;
