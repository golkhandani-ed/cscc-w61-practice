import { wait } from "@/lib/wait";
import styles from "./page.module.css";
import Image from "next/image";
import ActionButton from "@/components/action_button";



export default async function Categories() {
  const categories = [
    {
      "id": "1",
      "name": "Appetizers",
      "image": "http://localhost:3030/assets/images/category_1.jpg"
    },
    {
      "id": "2",
      "name": "Entrees",
      "image": "http://localhost:3030/assets/images/category_2.jpg"
    }
  ]
  await wait(1000);
  return <section className={styles["categories_container"]}>

    {
      categories.map((c) =>
        <div className={styles["category-card"]} key={c.id}>
          <Image
            src={c.image}
            alt={`category ${c.name} image`}
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
          <ActionButton className={styles["category-card__action"]}
            text={c.name}
            href={`/categories/${c.id}`} />
        </div>
      )
    }

  </section>
}