import ActionButton from "@/components/action_button";
import styles from "../page.module.css";
import Image from "next/image";
import { IFood } from "@/lib/interfaces";


export default function FoodCard({ food }: { food: IFood }) {

  return <div className={styles["food-card"]} key={food.id}>
    <Image
      src={food.image}
      alt={`food ${food.name} image`}
      width={200}
      height={200}
      style={{ objectFit: "cover" }}
    />
    <ActionButton
      className={styles["food-card__action"]}
      text={food.name}
      href={`/foods/${food.id}`} />

  </div>
}