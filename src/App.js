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
import EfficacyEffects from "./views/EfficacyEffects/EfficacyEffects";
import Store from "./views/Store/Store";
import Contact from "./views/Contact/Contact";
import { useState } from "react";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  }

  return (
    <div className={styles["wrapper"]}>
      <Header textColor={activeSlide === 6 ? 'white' : 'black'}/>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide><Introduction/></SwiperSlide>
        <SwiperSlide><QuoteWithAnalysis/></SwiperSlide>
        <SwiperSlide><Material/></SwiperSlide>
        <SwiperSlide><Advantages/></SwiperSlide>
        <SwiperSlide><EfficacyEffects/></SwiperSlide>
        <SwiperSlide><Store/></SwiperSlide>
        <SwiperSlide><Contact/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
