"use client";

import { AddToCardButton } from "@/components/action_button";
import styles from "../page.module.css"
import { useState } from "react";
import { USDollar } from "@/lib/us_dollor";
import { IFood } from "@/lib/interfaces";


export default function OrderSection({ food }: { food: IFood }) {
  const [count, setCount] = useState(0);
  const totalPrice = count * food.price;
  const totalTax = totalPrice * .13;

  function updateCount(value: number) {
    setCount(c => c + value);
  }

  return <section className={styles["order-details__container"]}>
    <h3>{food.name} Order details</h3>
    <div className={styles["order-details__row"]}>
      <h3>Number of Items</h3>
      <div className={styles["order-counter"]}>
        <button disabled={count <= 0} onClick={() => updateCount(-1)} className={styles["counter-btn"]}>-</button>
        <p>{count}</p>
        <button onClick={() => updateCount(+1)} className={styles["counter-btn"]}>+</button>
      </div>
    </div>
    <div className={styles["order-details__row"]}>
      <h3>Price Total</h3>
      <p>{USDollar.format(totalPrice)}</p>
    </div>
    <div className={styles["order-details__row"]}>
      <h3>Tax Total</h3>
      <p>{USDollar.format(totalTax)}</p>
    </div>
    <div className={styles["order-details__row"]}>
      <h3>Total</h3>
      <p>{USDollar.format(totalTax + totalPrice)}</p>
    </div>
    <div className={styles["order-details__row"]}>
      <AddToCardButton className={styles["add-to-card-btn"]} text="Add to Card (Disabled)" />
    </div>
  </section>
}