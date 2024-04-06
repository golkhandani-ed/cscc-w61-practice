import styles from "../page.module.css";
import FoodCard from "@/app/(home)/@favorites/components/FoodCard";
import { wait } from "@/lib/wait";
import { getCategoryFoodsByCategoryName } from "@/lib/api_helpers";

export async function FoodSection({ category }: { category: string; }) {
  await wait(1000);

  const foods = await getCategoryFoodsByCategoryName(category);

  return <section className={styles["category-details__foods"]}>
    {foods.map((f) => <FoodCard key={f.id} food={f} />
    )}
  </section>;

}
