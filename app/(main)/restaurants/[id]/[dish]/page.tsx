import { MealDetailsBlock } from "@/components/restaurants/dish/MealDetailsBlock";
import { restaurants } from "@/lib/data";

export default async function name({
  params,
}: {
  params: Promise<{ id: string; dish: string }>;
}) {
  const { id, dish } = await params;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  const dishItem = restaurant?.dishes.find((menuItem) => menuItem.id === dish);
  const others = restaurant?.dishes.filter(
    (menuItem) => menuItem.id !== dishItem?.id,
  );

  if (!dishItem) {
    return <div className="mt-20">Could'nt find dish</div>;
  }

  // if (!others) {
  //   return <></>;
  // }

  return <MealDetailsBlock dish={dishItem} others={others ?? []} />;
}
