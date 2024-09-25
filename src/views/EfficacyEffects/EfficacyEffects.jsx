import React, { useRef } from "react";
import styles from "./EfficacyEffects.module.scss";
import clsx from "clsx";
import EffectCard from "./EffectCard/EffectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";
import Icons from "../../components/icons/index";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const effects = [
  {
    imgSrc: "/assets/images/main-illust-05-1.png",
    imgAlt: "main-illust-05-1",
    imgSrcSet:
      "/assets/images/main-illust-05-1.png 1x, /assets/images/main-illust-05-1@2x.png 2x, /assets/images/main-illust-05-1@3x.png 3x",
    title: "노화 억제 및 세포 활성화",
    description:
      "NAD+는 신체 기능을 유지하며 수많은 세포에서 중요한 역할을 합니다. NMN 섭취를 통해 세포에서의 NAD+ 수치를 높이고 신체 기능 향상과 노화를 억제합니다.",
    hashtags: [
      {
        label: "신체기능향상",
        color: "yellow",
      },
      {
        label: "노화억제",
        color: "blue",
      },
    ],
  },
  {
    imgSrc: "/assets/images/main-illust-05-2.png",
    imgAlt: "main-illust-05-2",
    imgSrcSet:
      "/assets/images/main-illust-05-2.png 1x, /assets/images/main-illust-05-2@2x.png 2x, /assets/images/main-illust-05-2@3x.png 3x",
    title: "활성 산소 중의 미토콘드리아 생성 및 생체 에너지 보호",
    description:
      "NMN은 미토콘드리아 산화 스트레스를 약화시키고 노화된 뇌 미세혈관 내피 세포에서 미토콘드리아 생체 에너지를 향상시킵니다.",
    hashtags: [
      {
        label: "신체기능향상",
        color: null,
      },
      {
        label: "#노화억제",
        color: null,
      },
    ],
  },
  {
    imgSrc: "/assets/images/main-illust-05-3.png",
    imgAlt: "main-illust-05-3",
    imgSrcSet:
      "/assets/images/main-illust-05-3.png 1x, /assets/images/main-illust-05-3@2x.png 2x, /assets/images/main-illust-05-3@3x.png 3x",
    title: "혈액순환 촉진 및 심장 기능 개선 기능",
    description:
      "연구 결과, 신체 국소에 빈혈을 예방하는 효과가 있다고 합니다. SIRT1을 활성화함으로써 심장을 보호하고 혈액순환을 촉진시킵니다.",
    hashtags: [
      {
        label: "신체기능향상",
        color: null,
      },
      {
        label: "노화억제",
        color: null,
      },
    ],
  },
  {
    imgSrc: "/assets/images/main-illust-05-4.png",
    imgAlt: "main-illust-05-4",
    imgSrcSet:
      "/assets/images/main-illust-05-4.png 1x, /assets/images/main-illust-05-4@2x.png 2x, /assets/images/main-illust-05-4@3x.png 3x",
    title: "세포 에너지 증가",
    description:
      "미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다.",
    hashtags: [
      {
        label: "신체기능향상",
        color: null,
      },
      {
        label: "노화억제",
        color: null,
      },
    ],
  },
  {
    imgSrc: "/assets/images/main-illust-05-5.png",
    imgAlt: "main-illust-05-5",
    imgSrcSet:
      "/assets/images/main-illust-05-5.png 1x, /assets/images/main-illust-05-5@2x.png 2x, /assets/images/main-illust-05-5@3x.png 3x",
    title: "세포 에너지 증가",
    description:
      "미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다.",
    hashtags: [
      {
        label: "신체기능향상",
        color: null,
      },
      {
        label: "노화억제",
        color: null,
      },
    ],
  },
];

export default function EfficacyEffects() {
  const swiperRef = useRef(null);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper__text-wrap"]}>
        <h5
          className={clsx(
            "text-highlight",
            styles["wrapper__text-wrap__text-highlight"]
          )}
        >
          NMN의 효능, 효과
        </h5>
        <h1 className={styles["wrapper__text-wrap__title"]}>
          NMN의 효능과 효과를 한 눈에 살펴보세요.
        </h1>
      </div>

      <div className={styles["wrapper__navigation"]}>
        <span className={styles["wrapper__navigation__text"]}>1/7</span>
        <div className={styles["wrapper__group-btn"]}>
          <button
            className={styles["wrapper__group-btn__btn-prev"]}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icons.ArrowRight
              className={styles["wrapper__group-btn__btn-prev__icon"]}
            />
          </button>
          <button
            className={styles["wrapper__group-btn__btn-next"]}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icons.ArrowRight
              className={styles["wrapper__group-btn__btn-next__icon"]}
            />
          </button>
        </div>
      </div>

      <div className={styles["wrapper__effect-slides"]}>
        <Swiper
          slidesPerView={1.25}
          spaceBetween={30}
          grid={{
            rows: 1,
            fill: "row",
          }}
          modules={[Grid, Pagination]}
          breakpoints={{
            576: {
              slidesPerView: 2.5,
              spaceBetween: 30,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 10,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 10,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
            1920: {
              slidesPerView: 4.5,
              spaceBetween: 30,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {effects.map((item, index) => (
            <SwiperSlide key={index}>
              <EffectCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
