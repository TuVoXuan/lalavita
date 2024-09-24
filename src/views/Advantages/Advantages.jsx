import React from "react";
import styles from "./Advantages.module.scss";
import clsx from "clsx";

export default function Advantages() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper__advantage-one"]}>
        <div className={styles["text-wrap"]}>
          <h5 className={clsx("text-highlight", styles["text-highlight"])}>
            Advantages 1
          </h5>
          <h1
            className={clsx(
              styles["text-title"],
              styles["text-title__advan-one"]
            )}
          >
            99% 이상 고순도의 Uthever® NMN
          </h1>
          <ul
            className={clsx(
              styles["text-desc"],
              styles["text-desc__advan-one"]
            )}
          >
            <li>1. 가장 높은 고순도 NMN.</li>
            <li>2. 세계 최대 시험인증기관 인터텍 인증 획득.</li>
          </ul>
        </div>
        <div
          className={clsx(
            styles["img-advantage"],
            styles["img-advantage__advan_one"]
          )}
        >
          <img
            src="/assets/images/main-illust-04-1.png"
            alt="main-illust-04-1"
            srcSet="/assets/images/main-illust-04-1.png 1x,
            /assets/images/main-illust-04-1@2x.png 2x,
            /assets/images/main-illust-04-1@3x.png 3x"
          />
        </div>
      </div>
      <div className={styles["wrapper__advantage-two"]}>
        <div className={styles["text-wrap"]}>
          <h5 className={clsx("text-highlight", styles["text-highlight"])}>
            Advantages 2
          </h5>
          <h1
            className={clsx(
              styles["text-title"],
              styles["text-title__advan-two"]
            )}
          >
            높은 안전성 및 유효성
          </h1>
          <ul
            className={clsx(
              styles["text-desc"],
              styles["text-desc__advan-two"]
            )}
          >
            <li>
              1. Effepharm에서는 Uthever® NMN에 대한 동물실험과 인체 임상실험을
              통해 안정성 및 유효성 인증.
            </li>
            <li>2. 흡수성과 온도에 휠씬 덜 민감하여 실온에서 보관 가능.</li>
          </ul>
        </div>
        <div
          className={clsx(
            styles["img-advantage"],
            styles["img-advantage__advan_two"]
          )}
        >
          <img
            src="/assets/images/main-illust-04-2.png"
            alt="main-illust-04-2"
            srcSet="/assets/images/main-illust-04-2.png 1x,
            /assets/images/main-illust-04-2@2x.png 2x,
            /assets/images/main-illust-04-2@3x.png 3x"
          />
        </div>
      </div>
    </div>
  );
}
