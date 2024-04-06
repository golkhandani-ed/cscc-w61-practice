import { ICategory, IFood } from "./interfaces";

export async function getFoodById(foodID: string): Promise<IFood> {
  const foods = await fetch("http://localhost:3030/foods/" + foodID).then(
    (res) => res.json()
  );
  return foods;
}

export async function getCategoryById(categoryID: string): Promise<ICategory> {
  const category = await fetch(
    "http://localhost:3030/categories/" + categoryID
  ).then((res) => res.json());
  return category;
}

export async function getCategoryFoodsByCategoryName(
  categoryName: string
): Promise<IFood[]> {
  const foods = await fetch(
    "http://localhost:3030/foods?category=" + categoryName.toLowerCase()
  ).then((res) => res.json());
  return foods;
}
