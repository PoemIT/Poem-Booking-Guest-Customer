import { MealDetailsBlock } from "@/components/restaurants/dish/MealDetailsBlock";
import { restaurants } from "@/lib/data";
import { Dish } from "@/lib/types";
import React from "react";

export default async function name({
  params,
}: {
  params: Promise<{ id: string; dish: string }>;
}) {
  const { id, dish } = await params;
  const restaurant = restaurants.find((restauran) => (restauran.id = id));
  const Dish = restaurant?.dishes.find((mydish) => mydish.id === dish);
  const others = restaurant?.dishes.filter((dis) => dis.id !== Dish?.id);

  if (!Dish) {
    return <></>;
  }

  if (!others) {
    return <></>;
  }

  return <MealDetailsBlock dish={Dish} others={others} />;
}
