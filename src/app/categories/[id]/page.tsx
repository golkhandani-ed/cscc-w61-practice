import Image from "next/image"

import styles from "./page.module.css";
import { Suspense } from "react";
import { FoodSection } from "./components/FoodSection";
import { FoodLoading } from "./components/FoodLoading";
import { getCategoryById } from "@/lib/api_helpers";
import { ICategory } from "@/lib/interfaces";

export type CategoryPageParam = {
  id: string;
}

function CategoryHeader({ category }: { category: ICategory }) {
  return <header className={styles["category-details__header"]}>
    <Image
      src={category.image}
      alt={`category ${category.name} image`}
      width={800}
      height={400}
      style={{ objectFit: "cover" }}
    />
    <div className={styles["category-details__header-content"]}>
      <h2>{category.name}</h2>
    </div>
  </header>

}

export default async function CategoryPage({
  params
}: {
  params: CategoryPageParam
}) {
  const c = await getCategoryById(params.id);
  return <div className={styles["category-details__container"]}>
    <CategoryHeader category={c} />
    <Suspense fallback={<FoodLoading />}>
      <FoodSection category={c.name}></FoodSection>
    </Suspense>
  </div>
}