import Dashboard from "../pages/main/index";
import News from "../pages/news/index.jsx";
import NowShowing from "../pages/films-info/now-showing/index";
import Incoming from "../pages/films-info/incoming/index";
import TheaterInfo from "../pages/theater-info/index";
import FilmDetail from "../pages/films-info/film-detail/index";
import NewsDetail from "../pages/news/news-detail/index";
import LoginLogout from "../pages/login-logout/index";
import TicketCart from "../pages/ticket-cart/index";
import Error from "../pages/error/index";
import PurchaseSuccess from "../pages/purchase-success/index";
import UserInfo from "../pages/user-info/index";
import ManageUser from "../admin/pages/manage-user/index";
import ManageRevenue from "../admin/pages/manage-revenue/index";
import ManageFilm from "../admin/pages/manage-film/index";

const ROUTES__CONFIG = {
  USER__ROUTES: {
    dashboard: {
      path: "/",
      exact: true,
      component: Dashboard,
    },
    news: {
      path: "/news",
      exact: true,
      component: News,
    },
    nowShowing: {
      path: "/now-showing",
      exact: true,
      component: NowShowing,
    },
    incoming: {
      path: "/incoming",
      exact: true,
      component: Incoming,
    },
    theaterInfo: {
      path: "/theater-info",
      exact: true,
      component: TheaterInfo,
    },
    filmDetail: {
      path: "/film-detail/:id",
      exact: true,
      component: FilmDetail,
    },
    LoginLogout: {
      path: "/login-logout",
      exact: true,
      component: LoginLogout,
    },
    TicketCart: {
      path: "/ticket-cart",
      exact: true,
      component: TicketCart,
    },
    Error: {
      path: "/error",
      exact: true,
      component: Error,
    },
    PurchaseSuccess: {
      path: "/purchase-success",
      exact: true,
      component: PurchaseSuccess,
    },
    ManageUser: {
      path: "/admin/manage-user",
      exact: true,
      component: ManageUser,
    },
    ManageRevenue: {
      path: "/admin/manage-revenue",
      exact: true,
      component: ManageRevenue,
    },
    ManageFilm: {
      path: "/admin/manage-film",
      exact: true,
      component: ManageFilm,
    },
    UserInfo: {
      path: "/user-info",
      exact: true,
      component: UserInfo,
    },
    NewsDetail: {
      path: "/news-detail/:id",
      exact: true,
      component: NewsDetail,
    },
  },
};

export const userRoutes = ROUTES__CONFIG.USER__ROUTES;
export default ROUTES__CONFIG;
