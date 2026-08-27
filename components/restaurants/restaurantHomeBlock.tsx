"use client";
import React, { useEffect, useState } from "react";
import { RestaurantsHomeHero } from "./HomeHero";
import { RestaurantHomePageContent } from "./HomePageContent";
import { restaurants } from "@/lib/data";

export const RestaurantHomeBlock = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    rating: 0,
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col gap-20">
      <RestaurantsHomeHero />
      <RestaurantHomePageContent
        restaurants={restaurants}
        isLoading={loading}
      />
    </div>
  );
};
