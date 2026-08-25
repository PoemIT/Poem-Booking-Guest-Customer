"use client";
import React, { useEffect, useState } from "react";
import { RestaurantDetailsHero } from "./DetailsBlock";
import { DetailsContent } from "./DetailsContent";
import { Restaurant } from "@/lib/types";

export const RestaurantDetailsBlock = ({
  restaurant,
}: {
  restaurant: Restaurant;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <RestaurantDetailsHero loading={isLoading} restaurant={restaurant} />
      <DetailsContent loading={isLoading} restaurant={restaurant} />
    </div>
  );
};
