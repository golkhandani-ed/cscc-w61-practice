import { wait } from "@/lib/wait"
import styles from "./page.module.css"
import Image from "next/image";
import ActionButton from "@/components/action_button";
import FoodCard from "./components/FoodCard";


export default async function Favorites() {

  const favorites = [
    {
      "id": "1",
      "name": "Caprese Salad",
      "description": "Fresh mozzarella, tomatoes, basil, drizzled with balsamic glaze.",
      "price": 8.99,
      "image": "http://localhost:3030/assets/images/food_1.jpg"
    },
    {
      "id": "4",
      "name": "Grilled Salmon",
      "description": "Fresh Atlantic salmon, grilled to perfection, served with seasonal vegetables and mashed potatoes.",
      "price": 18.99,
      "image": "http://localhost:3030/assets/images/food_4.jpg"
    },
    {
      "id": "5",
      "name": "Mushroom Risotto",
      "description": "Creamy Arborio rice cooked with assorted mushrooms, finished with parmesan cheese and truffle oil.",
      "price": 16.49,
      "image": "http://localhost:3030/assets/images/food_5.jpg"
    }
  ];

  await wait(10000);

  return <section className={styles["categories_container"]}>
    {
      favorites.map((f) =>
        <FoodCard key={f.id} food={f} />
      )
    }
  </section>
}