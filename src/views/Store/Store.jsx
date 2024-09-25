import React, { useState } from "react";
import styles from "./Store.module.scss";
import clsx from "clsx";
import Icons from "../../components/icons";
import ProductCard from "./ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const categories = [
  {
    label: "NMN",
    value: "NMN",
  },
  {
    label: "트렌스-레스베라트롤",
    value: "트렌스-레스베라트롤",
  },
  {
    label: "비타민 K2+D3",
    value: "비타민 K2+D3",
  },
  {
    label: "아피제닌",
    value: "아피제닌",
  },
  {
    label: "피세틴",
    value: "피세틴",
  },
  {
    label: "케르세틴",
    value: "케르세틴",
  },
  {
    label: "Coq10",
    value: "Coq10",
  },
  {
    label: "Tmg",
    value: "Tmg",
  },
  {
    label: "Lutein",
    value: "Lutein",
  },
  {
    label: "MSM",
    value: "MSM",
  },
];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleChangeCategory = (cate) => {
    setActiveCategory(cate);
  };

  return (
    <div className={styles["wrapper"]}>
      <h1 className={styles["title"]}>라라비타 스토어</h1>

      <div className={styles["category-wrap"]}>
        <div className={styles["category-wrap__btn-prev"]}>
          <Icons.ChevronRight
            className={styles["category-wrap__btn-prev__icon"]}
          />
        </div>
        <div className={styles["category-wrap__main"]}>
          <ul className={styles["category-list"]}>
            {categories.map((item) => (
              <li
                key={item.label}
                className={clsx(
                  styles["category-list__item"],
                  activeCategory.label === item.label && styles["active"]
                )}
                onClick={() => handleChangeCategory(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["category-wrap__btn-next"]}>
          <Icons.ChevronRight
            className={styles["category-wrap__btn-next__icon"]}
          />
        </div>
      </div>

      <div className={styles["prod-list"]}>
        <Swiper
          slidesPerView={1}
          grid={{
            rows: 1,
            fill: "row",
          }}
          pagination={true}
          modules={[Pagination, Grid]}
          spaceBetween={20}
          breakpoints={{
            576: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
            },
            992: {
              slidesPerView: 3,
              grid: {
                rows: 2,
              },
            },
            1200: {
              slidesPerView: 3,
              grid: {
                rows: 1,
              },
              pagination: false,
            },
          }}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
