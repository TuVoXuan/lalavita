import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import styles from "./App.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import Header from "./components/header/header";
import Introduction from "./views/Introduction/Introduction";
import QuoteWithAnalysis from "./views/QuoteWithAnalysis/QuoteWithAnalysis";
import Material from "./views/Material/Material";
import Advantages from "./views/Advantages/Advantages";

function App() {
  return (
    <div className={styles["wrapper"]}>
      <Header />
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
      >
        <SwiperSlide><Introduction/></SwiperSlide>
        <SwiperSlide><QuoteWithAnalysis/></SwiperSlide>
        <SwiperSlide><Material/></SwiperSlide>
        <SwiperSlide><Advantages/></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
