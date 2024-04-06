import Image from "next/image"

import styles from "./page.module.css";
import OrderSection from "./components/OrderSection";
import { getFoodById } from "@/lib/api_helpers";



export type FoodPageParam = {
  id: string;
}

export default async function FoodPage({
  params
}: {
  params: FoodPageParam
}) {

  const food = await getFoodById(params.id);

  return <div className={styles["food-details__container"]}>
    <header className={styles["food-details__header"]}>
      <Image
        src={food.image}
        alt={`category ${food.name} image`}
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <div className={styles["food-details__header-content"]}>
        <h2>{food.name}</h2>
        <h1>{food.price}</h1>
      </div>
      <p>
        {food.description}
      </p>
      <OrderSection food={food} />
    </header>
  </div>
}