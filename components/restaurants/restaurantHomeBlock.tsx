"use client";
import React, { useEffect, useState } from "react";
import { RestaurantsHomeHero } from "./HomeHero";
import { RestaurantHomePageContent } from "./HomePageContent";

export const RestaurantHomeBlock = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col gap-20">
      <RestaurantsHomeHero />
      <RestaurantHomePageContent isLoading={loading} />
    </div>
  );
};
