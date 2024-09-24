import React from "react";
import styles from "./QuoteWithAnalysis.module.scss";
import clsx from "clsx";
import AnalysisCard from "./AnalysisCard/AnalysisCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const cards = [
  {
    title: "인체의 NAD+ 균형 유지를 위해",
    description:
      "인체에서 에너지 생성, 대사 및 유전자 발현에 중요한 역할을 하는 NAD+ 는 모든 살아 있는 세포에서 발견되는 보조인자입니다. 사람은 나이가 들수록 가졌던 NAD+ 수준이 감소하여 노화 속도가 빨라지고 관련 신체 건강 상태도 나빠지기도 합니다.",
    iconSrc: "/assets/images/main-illust-02-1.png",
    iconSrcSet:
      "/assets/images/main-illust-02-1.png 1x, /assets/images/main-illust-02-1@2x.png 2x, /assets/images/main-illust-02-1@3x.png 3x",
    iconAlt: "main-illust-02-1",
    bgColor: "white",
  },
  {
    title: "인체 내의 주요 세포 에너지원",
    description:
      "니코틴아마이드 모노뉴클레오타이드(NMN)는 인체 내의 주요 세포 에너지원 중에 하나입니다. 감소된 NAD+ 를 보충제 역할을 함으로써 노화를 늦추는 효과가 있으며, 건강을 향상시키는데 도움이 됩니다.",
    iconSrc: "/assets/images/main-illust-02-2.png",
    iconSrcSet:
      "/assets/images/main-illust-02-2.png 1x, /assets/images/main-illust-02-2@2x.png 2x, /assets/images/main-illust-02-2@3x.png 3x",
    iconAlt: "main-illust-02-2",
    bgColor: "blue",
  },
  {
    title: "젊음 유지 및 노화 억제에 탁월한 효과",
    description:
      "NMN은 노화를 되돌릴 뿐만 아니라 관련된 질병을 억제하는데 효과적입니다. 연구를 진행한 결과, NMN가 노화로 인한 세포 손상, 신경 퇴행, 심장기능 악화 등의 문제 개선과 젊음을 유지하는데 효과가 있다는 것을 발견했습니다.",
    iconSrc: "/assets/images/main-illust-02-3.png",
    iconSrcSet:
      "/assets/images/main-illust-02-3.png 1x, /assets/images/main-illust-02-3@2x.png 2x, /assets/images/main-illust-02-3@3x.png 3x",
    iconAlt: "main-illust-02-3",
    bgColor: "white",
  },
];

export default function QuoteWithAnalysis() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper__text-wrap"]}>
        <h5
          className={clsx(
            "text-highlight",
            styles["wrapper__text-wrap__text-highlight"]
          )}
        >
          NMN는 왜 중요할까요?
        </h5>
        <h1 className={styles["wrapper__text-wrap__title"]}>
          <span className={styles["wrapper__text-wrap__title__quote"]}>“</span>
          노화는 질병, 그것도 치료할 수 있는 질병에 불과하다. 그리고 이것에 가장
          근접한 물질은{" "}
          <span className={styles["wrapper__text-wrap__title__quote"]}>‘</span>
          <span className={styles["wrapper__text-wrap__title__bold"]}>NMN</span>
          <span className={styles["wrapper__text-wrap__title__quote"]}>’</span>
          이다.
          <span className={styles["wrapper__text-wrap__title__quote"]}>”</span>
        </h1>
        <p className={styles["wrapper__text-wrap__desc"]}>
          미국 하버드대학교 의과대학 블라바트닉 연구소 유전학 데이비드 싱클레어
          교수
        </p>
      </div>

      <div className={styles["wrapper__card-wrap"]}>
        <div className={styles["wrapper__card-wrap__swiper"]}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            spaceBetween={30}
            autoHeight
          >
            {cards.map((item, index) => (
              <SwiperSlide key={index}>
                <AnalysisCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles["wrapper__card-wrap__list"]}>
          {cards.map((item, index) => (
            <AnalysisCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
