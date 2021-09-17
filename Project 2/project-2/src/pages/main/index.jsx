import Slider from "../../components/pages/main/slider/index";
import LogoTitle from "../../components/pages/main/logo-title/index";
import FeatureSlider from "../../components/pages/main/feature-slider/index";
import "./styles.scss";

const movieTitle = "/assets/logo/logo-title/h3_movie_selection.gif";

const eventTitle = "/assets/logo/logo-title/h3_event.gif";

const movieSrc = {
  isMovie: true,
  list: [
    "assets/img/movies-showing/1200x1800_1.jpg",
    "assets/img/movies-showing/boss_level_-_payoff_poster_1__1.jpg",
    "assets/img/movies-showing/btdq_main_poster_1.jpg",
    "assets/img/movies-showing/godzilla_vs_1__1.jpg",
    "assets/img/movies-showing/mortal_kombat_-_vn_-_payoff_poster_1_1__1.jpg",
    "assets/img/movies-showing/poster_lat_mat_4_160421_1__1.jpg",
  ],
};

const eventSrc = {
  list: [
    "assets/img/events/cgv_79k_240x201_170920.png",
    "assets/img/events/cgv-crm-team-chi-1-duoc-2-240x201_1.jpg",
    "assets/img/events/doreamon_web_app_240x201.jpg",
    "assets/img/events/happy-new-year-240x201_1.png",
    "assets/img/events/n95_240x201_1.jpg",
  ],
};

function Dashboard() {
  return (
    <div className="dashboard">
      <Slider />

      <LogoTitle src={movieTitle} />

      <FeatureSlider src={movieSrc} />

      <LogoTitle src={eventTitle} />

      <FeatureSlider src={eventSrc} />
    </div>
  );
}

export default Dashboard;
