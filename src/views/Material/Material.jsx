import React from "react";
import styles from "./Material.module.scss";
import clsx from "clsx";

export default function Material() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper__text-wrap"]}>
        <h5
          className={clsx(
            "text-highlight",
            styles["wrapper__text-wrap__text-highlight"]
          )}
        >
          라라비타 NMN 원료
        </h5>
        <h1 className={styles["wrapper__text-wrap__title"]}>Uthever® NMN이</h1>
        <h1 className={styles["wrapper__text-wrap__title"]}>
          SUPERCONDRIA® NMN으로
        </h1>
        <h1 className={styles["wrapper__text-wrap__title"]}>
          새롭게 태어났습니다.
        </h1>
        <p className={styles["wrapper__text-wrap__desc"]}>
          라라비타는 Uthever® NMN 상표 사용 허가를 받은 최초의 한국
          브랜드입니다. Uthever® NMN은 라라비타의 SUPERCONDRIA® NMN으로 전
          세계에 판매되고 있습니다. Effepharm의 Uthever® NMN은 시장에서 순도,
          효능 및 품질에서 가장 뛰어난 원료로 인정 받고 있습니다. 99% 이상의
          고순도를 가지고 있는 것이 특징입니다.
        </p>
      </div>
      <div className={styles["wrapper__illust-img"]}>
        <img
          src="/assets/images/main-illust-03.png"
          alt="main-illust-03"
          srcSet="/assets/images/main-illust-03.png 1x,
          /assets/images/main-illust-03@2x.png 2x,
          /assets/images/main-illust-03@3x.png 3x"
        />
      </div>
    </div>
  );
}
