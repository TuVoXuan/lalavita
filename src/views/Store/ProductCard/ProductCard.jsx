import React from "react";
import styles from "./ProductCard.module.scss";

export default function ProductCard() {
  return (
    <div className={styles["prod-card"]}>
      <div className={styles["prod-card__thumbnail"]}>
        <img
          src="/assets/images/product-powder.png"
          alt="product-powder.png"
          srcSet="/assets/images/product-powder.png 1x,
          /assets/images/product-powder@2x.png 2x,
          /assets/images/product-powder@3x.png 3x"
        />
      </div>
      <div className={styles["prod-card__info"]}>
        <h3 className={styles["prod-card__info__name"]}>NMN 파우더</h3>
        <p className={styles["prod-card__info__desc"]}>
          남자의 관절, 연골 건강에 도움을 줄 수 있는 제품입니다. 관절&연골
          건강기능성 제품
        </p>
      </div>
      <div className={styles["prod-card__prices"]}>
        <span className={styles["prod-card__prices__actual-price"]}>
          67,000원
        </span>
        <span className={styles["prod-card__prices__discount-price"]}>
          56,900원
        </span>
      </div>
    </div>
  );
}
