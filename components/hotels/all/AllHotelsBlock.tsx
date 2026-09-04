"use client";
import React, { Suspense, useEffect, useState } from "react";
import { AllHotelsHero } from "./Hero";
import { HotelFilters } from "./Hero";
import { HotelsGrid } from "./HotelsGrid";
import { useSearchParams } from "next/navigation";
import { useGetHotels } from "@/lib/public/useGetHotels";

export const AllHotelsBlock = () => {
  const searchParams = useSearchParams();
  const { data: hotels, isError } = useGetHotels();
  const urlFilters = {
    location: searchParams.get("location"),
    pricerange: searchParams.get("priceRange"),
    rating: searchParams.get("rating"),
  };
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<HotelFilters>({
    region: urlFilters.location ?? "",
    priceRange: urlFilters.pricerange ?? "",
    rating: urlFilters.rating ?? "",
    collectionId: "",
  });

  const updateFilter = (key: keyof HotelFilters, value: string) => {
    const nextFilters = { ...filters, [key]: value };
    setFilters(nextFilters);
  };

  const clearFilters = () => {
    const emptyFilters: HotelFilters = {
      region: "",
      priceRange: "",
      rating: "",
      collectionId: "",
    };
    setFilters(emptyFilters);
  };

  // const filterHotels = hotels?.data.data.filter((hotel) => {
  //   const matchesRegion = !filters.region || hotel.cityId === filters.region;
  //   const matchesCollection =
  //     !filters.collectionId ||
  //     hotel.collectionIds.includes(filters.collectionId);
  //   const matchesRating =
  //     !filters.rating || hotel.rating >= Number(filters.rating);
  //   const price = hotel.startingPrice;
  //   const matchesPrice =
  //     !filters.priceRange ||
  //     (filters.priceRange === "under-100000" && price < 100000) ||
  //     (filters.priceRange === "100000-150000" &&
  //       price >= 100000 &&
  //       price <= 150000) ||
  //     (filters.priceRange === "150000-250000" &&
  //       price > 150000 &&
  //       price <= 250000) ||
  //     (filters.priceRange === "over-250000" && price > 250000);

  //   return matchesRegion && matchesCollection && matchesRating && matchesPrice;
  // });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="container-x flex flex-col gap-6">
      <AllHotelsHero
        filters={filters}
        clearFilters={clearFilters}
        updateFilter={(e, i) => updateFilter(e, i)}
      />
      <HotelsGrid
        isLoading={isLoading}
        isError={isError}
        hotels={hotels?.data.data}
      />
    </div>
  );
};

export const HotelsBlockDone = () => {
  return (
    <Suspense>
      <AllHotelsBlock />
    </Suspense>
  );
};
