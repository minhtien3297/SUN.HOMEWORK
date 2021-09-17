import { Modal, Button, List, message } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addTicketToWishList } from "../../../../redux/actions/wishList.actions";
import React from "react";
import "./styles.scss";

function FilmModal(props) {
  const isModalVisible = props.isModalVisible;
  const handleCancel = props.handleCancel;
  const movie = props.movieChosen;
  const dispatch = useDispatch();
  const [city, setCity] = React.useState();
  const [showTime, setShowTime] = React.useState();
  const [time, setTime] = React.useState();
  const [ticket, setTicket] = React.useState({
    movie: "",
    day: "",
    time: "",
    theater: "",
    user: useSelector((state) => state.user.user.username),
    price: 49000,
  });
  let calendar = [];
  const status = useSelector((state) => state.wishList.status);

  React.useEffect(() => {
    if (movie) {
      setMovieName();
    }
  }, [props]);

  function setMovieName() {
    setTicket({ ...ticket, movie: movie.movie });
  }

  for (let i = 0; i < 10; i++) {
    let today = moment().add(i, "days");
    calendar.push(today.format("ll"));
  }

  const calendarShow = calendar.map((day) => {
    return (
      <Button className="day__btn" onClick={() => filterCity(day)}>
        {day}
      </Button>
    );
  });

  function filterCity(day) {
    setCity("");
    setShowTime("");
    setTime("");
    setTicket({ ...ticket, day: day });
    const places = movie.days.find((item) => item.day === day);
    if (places) {
      setCity(places.places);
    }
  }

  function filterShowTime(showTime) {
    setShowTime(showTime);
    setTime("");
  }

  function setTheaterPurchase(theater) {
    setTicket({ ...ticket, theater: theater });
  }

  function setTimePurchase(time) {
    setTicket({ ...ticket, time: time });
  }

  function purchaseTicket() {
    dispatch(addTicketToWishList(ticket));
    handleCancel();
    if (status === "add success") {
      message.success("Đã thêm vé vào giỏ hàng");
    }
  }

  return (
    <Modal
      className="film-modal-dialog"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width={1300}
    >
      <div className="calendar">{calendarShow}</div>
      <List
        className="calendar__grid"
        grid={{ gutter: 70, column: 5 }}
        dataSource={city}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            onClick={() => {
              filterShowTime(item.showTime);
            }}
            actions={[<Button className="calendar__item">{item.city}</Button>]}
          ></List.Item>
        )}
      />

      <List
        className="calendar__grid"
        grid={{ gutter: 70, column: 5 }}
        dataSource={showTime}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            onClick={() => setTime(item.time)}
            actions={[
              <Button
                className="calendar__item"
                onClick={() => setTheaterPurchase(item.theater)}
              >
                {item.theater}
              </Button>,
            ]}
          ></List.Item>
        )}
      />

      <List
        className="calendar__grid"
        grid={{ gutter: 70, column: 5 }}
        dataSource={time}
        renderItem={(item, index) => (
          <List.Item
            key={index}
            actions={[
              <Button
                className="calendar__item"
                onClick={() => setTimePurchase(item)}
              >
                {item}
              </Button>,
            ]}
          ></List.Item>
        )}
      />

      <div className="calendar__grid">
        <Button className="purchase__btn" onClick={() => purchaseTicket()}>
          Mua
        </Button>
      </div>
    </Modal>
  );
}

export default FilmModal;
