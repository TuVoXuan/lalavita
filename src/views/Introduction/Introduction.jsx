import React from "react";
import styles from "./Introduction.module.scss";
import clsx from "clsx";
import Icons from "../../components/icons";

export default function Introduction() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["wrapper__text-wrap"]}>
        <h5
          className={clsx(
            "text-highlight",
            styles["wrapper__text-wrap__text-highlight"]
          )}
        >
          왜 라라비타 NMN일까요?
        </h5>
        <h1 className={styles["wrapper__text-wrap__title"]}>
          노화를 늦추고 건강을 지키는 최적의 방법
        </h1>
        <p className={styles["wrapper__text-wrap__desc"]}>
          라라비타의 SUPERCONDRIA ®NMN은 전세계적으로 인증 받은 Uthever® NMN로
          만든 고순도 제품입니다.
        </p>

        <div className={styles["wrapper__letter-wrap"]}>
          <img
            src="/assets/images/main-letter-1.png"
            alt="main-letter-1"
            srcSet="/assets/images/main-letter-1.png 1x,
            /assets/images/main-letter-1@2x.png 2x,
            /assets/images/main-letter-1@3x.png 3x"
          />
          <img
            src="/assets/images/main-letter-2.png"
            alt="main-letter-2"
            srcSet="/assets/images/main-letter-2.png 1x,
            /assets/images/main-letter-2@2x.png 2x,
            /assets/images/main-letter-2@3x.png 3x"
          />
          <img
            src="/assets/images/main-letter-3.png"
            alt="main-letter-3"
            srcSet="/assets/images/main-letter-3.png 1x,
            /assets/images/main-letter-3@2x.png 2x,
            /assets/images/main-letter-3@3x.png 3x"
          />
          <img
            src="/assets/images/main-letter-4.png"
            alt="main-letter-4"
            srcSet="/assets/images/main-letter-4.png 1x,
            /assets/images/main-letter-4@2x.png 2x,
            /assets/images/main-letter-4@3x.png 3x"
          />
        </div>

        <div className={styles["wrapper__confirm-logo-wrap"]}>
          <img
            src="/assets/images/main-confirm-logo-1.png"
            alt="main-confirm-logo-1"
            srcSet="/assets/images/main-confirm-logo-1.png 1x,
            /assets/images/main-confirm-logo-1@2x.png 2x,
            /assets/images/main-confirm-logo-1@3x.png 3x"
          />
          <img
            src="/assets/images/main-confirm-logo-2.png"
            alt="main-confirm-logo-2"
            srcSet="/assets/images/main-confirm-logo-2.png 1x,
            /assets/images/main-confirm-logo-2@2x.png 2x,
            /assets/images/main-confirm-logo-2@3x.png 3x"
          />
          <img
            src="/assets/images/main-confirm-logo-3.png"
            alt="main-confirm-logo-3"
            srcSet="/assets/images/main-confirm-logo-3.png 1x,
            /assets/images/main-confirm-logo-3@2x.png 2x,
            /assets/images/main-confirm-logo-3@3x.png 3x"
          />
          <img
            src="/assets/images/main-confirm-logo-4.png"
            alt="main-confirm-logo-4"
            srcSet="/assets/images/main-confirm-logo-4.png 1x,
            /assets/images/main-confirm-logo-4@2x.png 2x,
            /assets/images/main-confirm-logo-4@3x.png 3x"
          />
          <img
            src="/assets/images/main-confirm-logo-5.png"
            alt="main-confirm-logo-5"
            srcSet="/assets/images/main-confirm-logo-5.png 1x,
            /assets/images/main-confirm-logo-5@2x.png 2x,
            /assets/images/main-confirm-logo-5@3x.png 3x"
          />
        </div>
      </div>
      <div className={styles["wrapper__illustrate"]}>
        <img
          src="/assets/images/main-illust-01.png"
          alt="main-illust-01"
          srcSet="/assets/images/main-illust-01.png 1x,
            /assets/images/main-illust-01@2x.png 2x,
            /assets/images/main-illust-01@3x.png 3x"
        />
      </div>
      <button className={styles["wrapper__next-button"]}>
        <Icons.ArrowDown className={styles["wrapper__next-button__icon"]} />
      </button>
    </div>
  );
}
