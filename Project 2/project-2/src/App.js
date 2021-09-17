import React from "react";
import { userRoutes } from "./router/router-config.jsx";
import { Layout, BackTop } from "antd";
import Header from "./partials/header/header.jsx";
import Footer from "./partials/footer/footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { getMovieData } from "./redux/thunks/movie.thunk";
import { getTheaterData } from "./redux/thunks/theater.thunk";
import { getWishList } from "./redux/actions/wishList.actions";
import { getNewsData } from "./redux/thunks/news.thunk";
import { getMovieCalendarData } from "./redux/thunks/movieCalendar.thunk";
import { getTicketData } from "./redux/thunks/ticket.thunk";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  /**
   * Fetch data
   */
  React.useEffect(() => {
    dispatch(getMovieData());
    dispatch(getTheaterData());
    dispatch(getWishList());
    dispatch(getNewsData());
    dispatch(getMovieCalendarData());
    dispatch(getTicketData());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Router>
          <Header />
          <Switch>
            {Object.entries(userRoutes).map(([name, route]) => {
              return (
                <Route
                  key={name}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}

            <Redirect to="/error" />
          </Switch>
        </Router>

        <BackTop />

        <Footer />
      </Layout>
    </div>
  );
}

export default App;
